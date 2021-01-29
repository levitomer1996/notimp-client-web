import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import firebase from "firebase";
import { Grid } from "@material-ui/core";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import GeneralModal from "./components/Modal/GeneralModal";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isFireBaseInitialzied, setIsFireBaseInitialzied] = useState(false);
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAcsln8Pmx_hNAdTiJyv3y5qcV3IxNZD9U",
        authDomain: "auth-78ad7.firebaseapp.com",
        projectId: "auth-78ad7",
        storageBucket: "auth-78ad7.appspot.com",
        messagingSenderId: "106996799061",
        appId: "1:106996799061:web:695c8944553088516ba6dc",
        measurementId: "G-TCD9EXT43N",
      });
    }
    setIsFireBaseInitialzied(true);
  }, []);
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <Grid>
            <GeneralModal />
            <Header isFireBaseInitialzied={isFireBaseInitialzied} />
            <Main />
          </Grid>
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
