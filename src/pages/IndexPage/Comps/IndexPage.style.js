import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  parallex: {
    backgroundImage: (props) => `url(${props.image_url})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 300,
    color: "white",
  },
}));
