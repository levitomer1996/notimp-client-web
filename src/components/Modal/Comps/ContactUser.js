import React, { useContext, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import ModalContext from "../../../context/ModalContext";
import BootstrapInput from "../../Boostrapinput/BootstrapInput";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import notimp from "../../../api/notimp";
import getToken from "../../../api/getToken";
function ContactUser({ params }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [spinner, setSpinner] = useState(false);
  const { setIsModalOpen } = useContext(ModalContext);
  const { reciver, owner } = params;
  const handleSumbit = async () => {
    try {
      setSpinner(true);
      await notimp.post(
        "mail/new",
        { reciver, content, title, sender_display_name: owner },
        {
          headers: {
            //IsTokenExist = token.
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setSpinner(false);
      setIsModalOpen();
    } catch (error) {
      setSpinner(false);
    }
  };

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
        spacing={2}
      >
        <Grid item>
          <Typography>
            To: <strong>{owner}</strong>
          </Typography>
        </Grid>
        <Grid item>
          <BootstrapInput onChangeFunction={setTitle} label="Title" />
        </Grid>
        <Grid item>
          <BootstrapInput
            onChangeFunction={setContent}
            label="Title"
            textArea
            rows={5}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "orange" }}
            type="submit"
          >
            Send
          </Button>
        </Grid>
        <Grid item>
          {spinner ? <CircularProgress style={{ color: "orange" }} /> : null}
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactUser;
