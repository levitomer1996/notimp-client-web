import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "./GoogleMap.style";
import { IconButton } from "@material-ui/core";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ coords, assetList }) => {
  const classes = useStyles();
  const { lat, lng } = coords;
  useEffect(() => {
    console.log(coords);
  }, [coords]);
  return (
    // Important! Always set the container height explicitly
    <div className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAcsln8Pmx_hNAdTiJyv3y5qcV3IxNZD9U" }}
        defaultCenter={{ lat, lng }}
        defaultZoom={11}
      >
        {assetList.map((asset) => (
          <IconButton lat={asset.lat} lng={asset.lng}>
            <HomeIcon style={{ color: "orange" }} />
          </IconButton>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
