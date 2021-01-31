import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./AssetPage.style";
const AssetProperties = (props) => {
  const classes = useStyles();
  const { isBalcony, isAirConditioned, isPets, isFurnished } = props;
  const propertiesList = [
    { title: "Balcony", prop: isBalcony },
    { title: "Air - Conditioned", prop: isAirConditioned },
    { title: "Pets allowed", prop: isPets },
    { title: "Furnished", prop: isFurnished },
  ];
  const renderIcon = (i) => {
    switch (i) {
      case true:
        return <CheckIcon style={{ color: "green" }} />;
      case false:
        return <CloseIcon style={{ color: "red" }} />;
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={5}
    >
      {propertiesList.map((item) => {
        return (
          <Grid item>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              {item.title}
              {renderIcon(item.prop)}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AssetProperties;
