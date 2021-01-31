import React, { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./AssetPage.style";
import { Typography } from "@material-ui/core";
import notimp from "../../../api/notimp";
import getToken from "../../../api/getToken";
const RatingStars = (props) => {
  const classes = useStyles();
  const { rates, assetId } = props;
  const [average, setAvererage] = useState(0);
  const [suceedRating, setSuceedRating] = useState(false);

  useEffect(() => {
    if (rates) {
      var avg;
      var sum = 0;
      for (let index = 0; index < rates.length; index++) {
        sum = sum + rates[index].rate_number;
      }
      avg = sum / rates.length;
      console.log(avg);
      setAvererage(avg);
    }
  }, [rates]);

  const handleSumbit = async (value) => {
    try {
      const res = await notimp.post(
        "/asset/updaterate",
        {
          assetId,
          rate_number: value,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setSuceedRating(true);
    } catch (error) {}
  };

  return (
    <div className={classes.rating_cotainer}>
      <Rating
        name="size-large"
        defaultValue={average === 0 ? 0 : average}
        size="large"
        onChange={(event, newValue) => {
          handleSumbit(newValue);
        }}
      />
      {rates ? (
        <Typography style={{ fontSize: 13, color: "gray" }}>
          Out of {rates.length} rates
        </Typography>
      ) : null}
    </div>
  );
};
export default RatingStars;
