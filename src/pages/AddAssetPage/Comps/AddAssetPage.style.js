import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));
