import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AddAssetProvider } from "../context/AddAssetContext";
import { IndexProvider } from "../context/IndexContext";
import AddAssetPage from "./AddAssetPage/AddAssetPage";
import AssetPage from "./AssetPage/AssetPage";
import IndexPage from "./IndexPage/IndexPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import SigninPage from "./SigninPage/SigninPage";
import SignupPage from "./SignupPage/SignupPage";
import Test from "./Test/Test";

export default () => {
  return (
    <Router>
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
        <Route exact path="/profile">
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
      </Switch>
    </Router>
  );
};
