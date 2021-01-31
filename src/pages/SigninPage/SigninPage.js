import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import BootStrapInput from "../../components/Boostrapinput/BootstrapInput";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Comps/SigninStyle";
import firebase from "firebase/app";
import "firebase/auth";
import GoogleButton from "react-google-button";
import CircularProgress from "@material-ui/core/CircularProgress";

import AuthContext from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import notimp from "../../api/notimp";

var provider = new firebase.auth.GoogleAuthProvider();

export default function SigninPage() {
  const { Signin, authState, Signout } = useContext(AuthContext);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(false);

  async function googleSignInPopup(provider) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        try {
          const res = await notimp.post("auth/signin", {
            uid: user.uid,
            signin_type: "GOOGLE_SIGNIN",
          });
          localStorage.setItem("ut", res.data);
        } catch (er) {
          console.log(er);
        }
        Signin(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    // [END auth_google_signin_popup]
  }

  const handleSumbit = () => {
    setSpinner(true);
    setError(null);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        try {
          const res = await notimp.post("auth/signin", {
            uid: user.user.uid,
            signin_type: "DEFULAT_SIGNIN",
          });
          Signin(user);
          localStorage.setItem("ut", res.data);
        } catch (er) {
          Signout();
        }
        setSpinner(false);
      })
      .catch((err) => {
        setError(`Something wen't wrong`);
        setSpinner(false);
      });
  };
  if (authState.isLogged) {
    return <Redirect to="/" />;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSumbit();
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
          <Grid item>
            <BootStrapInput
              type={"email"}
              label="E-mail"
              onChangeFunction={setEmail}
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              type={"password"}
              label="Password"
              onChangeFunction={setPassword}
            />
          </Grid>
          {spinner ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : null}
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="sumbit"
            >
              Signin
            </Button>
          </Grid>
          {error ? (
            <Grid item style={{ color: "red" }}>
              {error}
            </Grid>
          ) : null}
          <Grid item>
            {" "}
            <a href={"/signup"}>Still don't have an account? Register now</a>
          </Grid>

          <Grid item>
            <GoogleButton
              onClick={() => {
                googleSignInPopup(provider);
              }}
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}
