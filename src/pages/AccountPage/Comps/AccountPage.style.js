import React from "react";
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "20% 80%",
    },
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "30% 70%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rootMobile: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  root_children: { overflowWrap: "break-word" },
  SideMenuRoot: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  mailPaper: {
    padding: 20,
    maxHeight: 200,

    [theme.breakpoints.up("lg")]: {
      maxWidth: 600,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  assetPage: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alighnItems: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alighnItems: "flex-start",
    },
  },
}));
