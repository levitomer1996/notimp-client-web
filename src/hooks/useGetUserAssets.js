import React, { useState } from "react";
import notimp from "../api/notimp";
import getToken from "../api/getToken";
export default () => {
  const [userAssets, setAssets] = useState([]);
  const [user_assets_spinner, set_user_assets_spinner] = useState(false);
  const getUserAssets = async () => {
    try {
      set_user_assets_spinner(true);
      const res = await notimp.get("asset/userassets", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setAssets(res.data);
      set_user_assets_spinner(false);
    } catch (error) {
      set_user_assets_spinner(false);
    }
  };
  return [getUserAssets, userAssets, user_assets_spinner];
};
