import React from "react";
import { Grid } from "@material-ui/core";
import AssetCard from "../../../components/AssetCard/AssetCard";
import { useStyles } from "./AccountPage.style";
const AccountAssetsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.assetPage}>
      <AssetCard />
      <AssetCard />
      <AssetCard />
    </div>
  );
};

export default AccountAssetsPage;
