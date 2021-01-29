import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Header.style";

import CircularProgress from "@material-ui/core/CircularProgress";
const FoundAsset = ({ list, spinner }) => {
  const classes = useStyles();
  if (spinner) {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.search_foundAssets_container}
      >
        <Grid item>
          {" "}
          <CircularProgress />
        </Grid>
      </Grid>
    );
  } else if (list.length > 0) {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.search_foundAssets_container}
      >
        {list.map((item) => {
          return (
            <a href={`/asset/${item._id}`} className={classes.link}>
              <Grid item className={classes.foundAsset}>
                {item.title}
              </Grid>
            </a>
          );
        })}
      </Grid>
    );
  } else if (!spinner && list.length < 1) {
    return null;
  }
};

export default FoundAsset;
