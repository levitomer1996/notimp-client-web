// Import Swiper React components
import React, { useState, useEffect } from "react";
import { Typography, IconButton } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
// Import Swiper styles
import "swiper/swiper.scss";
import AssetCard from "../AssetCard/AssetCard";
import { Redirect } from "react-router-dom";
import { useStyles } from "./Comps/AssetSwiper.style";
import AssetSwiperMobile from "./Comps/AssetSwiperMobile";
export default ({ list, title, profileSwiper, spinner }) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [renderList, setRenderList] = useState([]);

  if (list.length > 0 || !spinner) {
    return (
      <div>
        <div className={classes.root}>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {list.map((item) => {
              return (
                <SwiperSlide>
                  <AssetCard
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    avatar={item.user_photo}
                    time_Posted={item.time_Posted}
                    description={item.description}
                    user_photo={item.user_photo}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <AssetSwiperMobile list={list} />
      </div>
    );
  } else if (spinner) {
    return (
      <div className={classes.spinner_container}>
        <CircularProgress className={classes.spinner} />
      </div>
    );
  }
};
