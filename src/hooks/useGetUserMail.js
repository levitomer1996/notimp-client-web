import React, { useContext, useState } from "react";
import notimp from "../api/notimp";
import AuthContext from "../context/AuthContext";
import getToken from "../api/getToken";

export default () => {
  const change;
  const { setMail } = useContext(AuthContext);
  const [spinner, setSpinner] = useState(false);
  const getUserMail = async () => {
    try {
      setSpinner(true);
      const res = await notimp.get("mail/usermail", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log(res.data);
      setMail(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getUserMail, spinner];
};
