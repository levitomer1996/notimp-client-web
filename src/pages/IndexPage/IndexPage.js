import React, { useContext, useEffect } from "react";
import useGetAssets from "../../hooks/useGetAssets";
import ParallexImage from "./Comps/ParallexImage";
import IndexContext from "../../context/IndexContext";
import AssetSwiper from "../../components/AssetSwiper/AssetSwiper";
export default function IndexPage() {
  const [getAssets, spinner] = useGetAssets();
  const { indexState } = useContext(IndexContext);
  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div>
      <ParallexImage />
      <AssetSwiper
        list={indexState.assets}
        title={"Most Relevant"}
        spinner={spinner}
      />
    </div>
  );
}
