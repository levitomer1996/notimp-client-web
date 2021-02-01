import React from "react";
import { Switch, Route } from "react-router-dom";
import { AccountPageProvider } from "../context/AccountContext";
import { AddAssetProvider } from "../context/AddAssetContext";
import { IndexProvider } from "../context/IndexContext";
import AccountPage from "./AccountPage/AccountPage";
import AddAssetPage from "./AddAssetPage/AddAssetPage";
import AssetPage from "./AssetPage/AssetPage";
import IndexPage from "./IndexPage/IndexPage";
import MyProfile from "./MyProfile/MyProfile";
import ProfilePage from "./ProfilePage/ProfilePage";
import SigninPage from "./SigninPage/SigninPage";
import SignupPage from "./SignupPage/SignupPage";
import Test from "./Test/Test";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <IndexProvider>
          <IndexPage />
        </IndexProvider>
      </Route>
      <Route exact path="/signin">
        <SigninPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <Route exact path="/myprofile">
        <MyProfile />
      </Route>
      <Route exact path="/profile/:id">
        <ProfilePage />
      </Route>
      <Route exact path="/addasset">
        <AddAssetProvider>
          <AddAssetPage />
        </AddAssetProvider>
      </Route>
      <Route path="/asset/:id">
        <AssetPage />
      </Route>
      <Route exact path="/test">
        <Test />
      </Route>
      <Route exact path="/account">
        <AccountPageProvider>
          <AccountPage />
        </AccountPageProvider>
      </Route>
    </Switch>
  );
};
