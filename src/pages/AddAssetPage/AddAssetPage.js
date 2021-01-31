import React, { useContext, useEffect, useState } from "react";
import {
  CircularProgress,
  FormControl,
  Grid,
  TextField,
} from "@material-ui/core";
import BootStrapInput from "../../components/Boostrapinput/BootstrapInput";
import AddAssetContext from "../../context/AddAssetContext";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import InputLabel from "@material-ui/core/InputLabel";
import { useStyles } from "./Comps/AddAssetPage.style";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Geocode from "react-geocode";
import GoogleMapSearchInput from "../../components/GoogleMapSearchInput/GoogleMapSearchInput";
import AuthContext from "../../context/AuthContext";
import notimp from "../../api/notimp";
import { Redirect } from "react-router-dom";
import BootstrapSelectInput from "../../components/Boostrapinput/BootstrapSelectInput";
import countryList from "./Comps/CountryList";

const AddAssetPage = () => {
  Geocode.setApiKey("AIzaSyAcsln8Pmx_hNAdTiJyv3y5qcV3IxNZD9U");
  Geocode.setLanguage("en");

  const GetAdressCoordinates = (adress) => {
    Geocode.fromAddress(adress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation(response.results[0].geometry.location);
        console.log(response.results[0].geometry.location);
        setAssetList([...assetList, response.results[0].geometry.location]);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const classes = useStyles();
  const {
    addAssetState,
    setTitle,
    setDescription,
    setLocation,
    setLocationName,
    setPrice,
    setIsBalcony,
    setIsFurnished,
    setIsPets,
    setIsAirConditioned,
    setFloor,
    setMainImage,
    setPreviewMainImage,
    setAdress,
    setCountry,
  } = useContext(AddAssetContext);
  const { authState } = useContext(AuthContext);
  const handleAddImg = async (e) => {
    setPreviewMainImage(URL.createObjectURL(e.target.files[0]));
    setMainImage(e.target.files[0]);

    console.log(main_Image);
    const formData = new FormData();
    formData.append("myFile", main_Image, main_Image.name);
    console.log(formData);
  };
  const {
    isBalcony,
    isFurnished,
    isPets,
    country,
    adress,
    isAirConditioned,
    title,
    description,
    location,
    location_name,
    price,
    floor,
    main_Image,
  } = addAssetState;
  const [spinner, setSpinner] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [assetList, setAssetList] = useState([]);

  const handleSubmit = async () => {
    console.log(main_Image);
    try {
      setError(null);
      setSpinner(true);

      const res = await notimp.post("asset/new", {
        uid: authState.user.uid,
        user_photo: authState.user.photoURL,
        rate: 0,
        title,
        description,
        owner: authState.user.displayName,
        location,
        location_name,
        price,
        floor,
        country,
        adress,
        isBalcony,
        isFurnished,
        isAirConditioned,
        isPets,
      });
      setSpinner(false);
      setRedirect(true);
    } catch (error) {
      setError("Something went wrong");
      console.log(error);
      setSpinner(false);
    }
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {redirect ? <Redirect to="/" /> : null}
        <Grid item>
          <BootStrapInput
            label="Asset title"
            onChangeFunction={setTitle}
            type="text"
          />
        </Grid>
        <Grid item>
          {" "}
          <BootStrapInput
            label="Description"
            rows={4}
            textArea
            onChangeFunction={setDescription}
          />
        </Grid>

        <Grid item>
          <BootstrapSelectInput
            options={countryList}
            label={"Country"}
            onChangeFunction={setCountry}
          />
        </Grid>
        <Grid item>
          <BootStrapInput label="Adress" onChangeFunction={setAdress} />
        </Grid>
        <Grid item>
          <GoogleMapSearchInput
            onChagneFunction={setLocationName}
            searchFuntion={GetAdressCoordinates}
            adress={addAssetState.location_name}
          />
          <GoogleMap coords={addAssetState.location} assetList={assetList} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              {" "}
              <BootStrapInput
                type="number"
                label="Price"
                onChangeFunction={setPrice}
              />
            </Grid>

            <Grid item>
              {" "}
              <BootStrapInput
                type="number"
                label="Floor"
                onChangeFunction={setFloor}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <BootStrapInput
            type="file"
            label="Set Main image"
            onChangeFunction={handleAddImg}
          />
        </Grid>
        {addAssetState.preview_main_image ? (
          <Grid item>
            <img
              src={addAssetState.preview_main_image}
              width={200}
              height={200}
            />
          </Grid>
        ) : null}
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              {" "}
              <FormControlLabel
                control={<Checkbox checked={isBalcony} name={"Balcony ?"} />}
                label={"Balcony ?"}
                onChange={() =>
                  isBalcony ? setIsBalcony(false) : setIsBalcony(true)
                }
              />
            </Grid>
            <Grid item>
              {" "}
              <FormControlLabel
                control={<Checkbox checked={isFurnished} name={"Furnished"} />}
                label={"Furnished ?"}
                onChange={() =>
                  isFurnished ? setIsFurnished(false) : setIsFurnished(true)
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              {" "}
              <FormControlLabel
                control={<Checkbox checked={isPets} name={"Pets"} />}
                label={"Pets Allowed?"}
                onChange={() => (isPets ? setIsPets(false) : setIsPets(true))}
              />
            </Grid>
            <Grid item>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isAirConditioned}
                    name={"AirConditioned"}
                  />
                }
                label={"AirConditioned ?"}
                onChange={() =>
                  isAirConditioned
                    ? setIsAirConditioned(false)
                    : setIsAirConditioned(true)
                }
              />
            </Grid>
          </Grid>
        </Grid>
        {spinner ? (
          <Grid item>
            <CircularProgress style={{ color: "orange" }} />
          </Grid>
        ) : null}
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
        <Grid item>
          <Button
            variant="contained"
            type={"sumbit"}
            style={{ backgroundColor: "orange" }}
          >
            Add Asset
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddAssetPage;
