import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
import ModalContext from "../../../context/ModalContext";

const ShareModal = () => {
  const { modalState } = useContext(ModalContext);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <FacebookShareButton url={modalState.params.url}>
          <FacebookIcon size={50} round={true} />
        </FacebookShareButton>
      </Grid>
      <Grid item>
        <WhatsappShareButton url={modalState.params.url}>
          <WhatsappIcon size={50} round={true} />
        </WhatsappShareButton>
      </Grid>
      <Grid item>
        <EmailShareButton>
          <EmailIcon size={50} round={true} />
        </EmailShareButton>
      </Grid>
    </Grid>
  );
};

export default ShareModal;
