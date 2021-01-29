import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useGetAsset from "../../hooks/useGetAsset";
import Avatar from "@material-ui/core/Avatar";
import imgURL from "../../components/imgURL";
import useStyles from "./Comps/AssetPage.style";
import CircularProgress from "@material-ui/core/CircularProgress";
import RatingStars from "./Comps/Rating";
import AssetProperties from "./Comps/AssetProperties";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
const AssetPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [getAssetDetails, asset, spinner] = useGetAsset();

  useEffect(() => {
    getAssetDetails(id);
    console.log(asset);
  }, []);
  const {
    _id,
    owner,
    description,
    price,
    user_photo,
    location,
    title,
    isBalcony,
    isAirConditioned,
    isPets,
    isFurnished,
    rate,
  } = asset;
  useEffect(() => {
    console.log(location);
  }, [location]);
  if (spinner) {
    return (
      <div className={classes.spinner_container}>
        <CircularProgress className={classes.spinner} />;
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <div>
          <Helmet>
            <title>{asset.title}</title>
          </Helmet>
          <img src={imgURL} style={{ paddingBottom: 20 }} />
          <div className={classes.profile_container}>
            <Typography style={{ paddingBottom: 20 }}>
              Owner: <strong>{owner}</strong>
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src={user_photo}
              style={{ height: 100, width: 100 }}
            />
          </div>
        </div>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
          </Grid>
          <Grid item style={{ overflowWrap: "anywhere" }}>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item>
            <AssetProperties
              isBalcony={isBalcony}
              isAirConditioned={isAirConditioned}
              isPets={isPets}
              isFurnished={isFurnished}
            />
          </Grid>
          <Grid item>
            <RatingStars rates={rate} assetId={_id} />
          </Grid>
          <Grid item>
            {location ? (
              <GoogleMap coords={location} assetList={[location]} />
            ) : null}
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default AssetPage;
