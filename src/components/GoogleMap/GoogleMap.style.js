import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    width: 500,
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      width: 375,
    },
  },
}));
