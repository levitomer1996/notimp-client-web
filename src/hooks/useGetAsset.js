import React, { useState } from "react";
import notimp from "../api/notimp";
export default () => {
  const [asset, setAsset] = useState({});
  const [spinner, setSpinner] = useState(false);
  const getAssetDetails = async (id) => {
    try {
      setSpinner(true);
      const res = await notimp.get(`asset/getasset/${id}`);

      setAsset(res.data);

      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getAssetDetails, asset, spinner];
};
