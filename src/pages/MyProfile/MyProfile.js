import React, { useContext, useEffect } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./Comps/MyProfile.styles";
import { Redirect } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import AssetSwiper from "../../components/AssetSwiper/AssetSwiper";
import useGetUserAssets from "../../hooks/useGetUserAssets";
const MyProfile = () => {
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  const { photoURL, displayName } = authState.user;
  const [getUserAssets, userAssets, user_assets_spinner] = useGetUserAssets();
  useEffect(() => {
    getUserAssets();
  }, []);
  if (authState.isLogged) {
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
          <AssetSwiper list={userAssets} title={"My assets"} />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <div>
        <Redirect to="signin" />
      </div>
    );
  }
};

export default MyProfile;
