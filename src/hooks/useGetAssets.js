import React, { useContext, useState } from "react";
import IndexContext from "../context/IndexContext";
import notimp from "../api/notimp";
export default () => {
  const { setAssets } = useContext(IndexContext);
  const [spinner, setSpinner] = useState(false);
  const getAssets = async () => {
    setSpinner(true);
    try {
      const res = await notimp.get("/asset");
      setAssets(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getAssets, spinner];
};
