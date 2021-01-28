import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "40% 60%",
    },
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridTemplateColumns: "25% 75% ",
    },
  },
  spinner_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    color: "orange",
    width: "500px",
    height: "500px",
  },
  title: {
    borderBottom: "1px #0000003d solid",
    paddingBottom: 10,
  },
  profile_container: {
    borderBottom: "1px #0000003d solid",
    borderTop: "1px #0000003d solid",
    paddingBottom: 20,
    paddingTop: 20,
  },
  asset_properties_container: {
    display: "flex",
    flexDirection: "column",
  },
  asset_properties_container_row: {
    flex: 1,
    flexDirection: "row",
  },
}));
export default useStyles;
