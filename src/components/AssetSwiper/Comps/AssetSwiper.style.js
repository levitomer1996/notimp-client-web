import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  mobileRoot: {
    [theme.breakpoints.down("sm")]: { display: "flex" },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: { display: "none" },
  },
  spinner_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    height: "200px",
    width: "200px",
    color: "orange",
  },
}));
