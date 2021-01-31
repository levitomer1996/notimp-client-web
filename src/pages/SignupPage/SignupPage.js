import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import BootStrapInput from "../../components/Boostrapinput/BootstrapInput";
import { useStyles } from "./Comps/SigninStyle";
import firebase from "firebase";
import useSignupFormValidation from "./Comps/useSignupFormValidation";
import notimp from "../../api/notimp";
import { Redirect } from "react-router-dom";
const SignupPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [isValid, validateForm] = useSignupFormValidation();
  useEffect(() => {
    validateForm(email, password, confirmPassword);
  }, [email, password, confirmPassword]);

  const handleSignup = () => {
    setError(false);
    setSpinner(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        var getUser = firebase.auth().currentUser;
        getUser
          .updateProfile({
            displayName: firstName + ` ` + lastName,
          })
          .then(async (u) => {
            const res = await notimp.post("/auth/signup", {
              uid: getUser.uid,
            });
            console.log("Registered to nestjs server");
          });
        setRedirect(true);
      })
      .catch((err) => {
        setError(`Something wen't wrong`);
      });
    setSpinner(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignup();
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ marginTop: 10, flex: 1 }}
      >
        {redirect ? <Redirect to="/" /> : null}
        <Grid item>
          <BootStrapInput
            label="E-mail"
            type="email"
            onChangeFunction={setEmail}
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label="Password"
            type="password"
            onChangeFunction={setPassword}
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label="Confirm password"
            type="password"
            onChangeFunction={setConfirmPassword}
          />
        </Grid>
        <Grid item>
          {" "}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <BootStrapInput
                label="First name"
                type="text"
                onChangeFunction={setFirstName}
              />
            </Grid>{" "}
            <Grid item>
              <BootStrapInput
                label="Last name"
                type="text"
                onChangeFunction={setLastName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {error ? (
            <div style={{ color: "red" }}>{"Something went wrong"}</div>
          ) : null}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type={"sumbit"}
            disabled={isValid}
          >
            Sign - up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default SignupPage;
