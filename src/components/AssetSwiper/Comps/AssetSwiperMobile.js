import React from "react";
import { useStyles } from "./AssetSwiper.style";
import AssetCard from "../../AssetCard/AssetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
export default function AssetSwiperMobile({ list, title, profileSwiper }) {
  const classes = useStyles();
  if (list.length > 0) {
    return (
      <div className={classes.mobileRoot}>
        <Swiper spaceBetween={3} slidesPerView={1}>
          {list.map((item) => {
            return (
              <SwiperSlide>
                <AssetCard
                  id={item._id}
                  key={item._id}
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
    );
  } else {
    return null;
  }
}
