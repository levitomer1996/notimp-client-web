import React, { useState } from "react";
import notimp from "../api/notimp";

export default () => {
  const [foundAssets, setFoundAssets] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const searchAsset = async (value) => {
    console.log(value);
    if (value === "") {
      setFoundAssets([]);
      return;
    }
    try {
      setSpinner(true);
      console.log("Trying to search");
      const res = await notimp.post("/asset/find", { title: value });

      setFoundAssets(res.data);
      console.log(foundAssets);
      setSpinner(false);
    } catch {
      setSpinner(false);
    }
  };
  return [foundAssets, searchAsset, spinner];
};
