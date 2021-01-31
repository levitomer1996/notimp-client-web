import React, { useState } from "react";
import * as EmailValidator from "email-validator";
export default () => {
  const [isValid, setIsValid] = useState(true);
  const validateForm = (email, pass, confirm_pass) => {
    if (!EmailValidator.validate(email) || !pass === confirm_pass) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return [isValid, validateForm];
};
