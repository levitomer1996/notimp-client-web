import React, { useContext } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import AuthContext from "../../context/AuthContext";
import { useStyles } from "./Comps/ProfilePage.style";
import AssetSwiper from "../../components/AssetSwiper/AssetSwiper";
export default function ProfilePage() {
  const { authState } = useContext(AuthContext);
  const { photoURL, displayName } = authState.user;
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Avatar alt={displayName} src={photoURL} className={classes.avatar} />
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.displayName}>
          {displayName}
        </Typography>
      </Grid>
      <Grid item style={{ width: "80%" }}>
        <AssetSwiper list={[]} title="My Assets" />
      </Grid>
    </Grid>
  );
}
