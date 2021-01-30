import React, { useReducer } from "react";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isLogged: true, user: action.payload };
    case "signout":
      return { ...state, isLogged: false, user: {} };
    case "set_mail":
      return { ...state, mail: action.payload };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  //d = dispatch
  const [authState, d] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
    mail: [],
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const Signin = (data) => {
    dispatch("signin", data);
    return;
  };
  const Signout = () => {
    dispatch("signout");
    return;
  };
  const setMail = (data) => {
    dispatch("set_mail", data);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        Signin,
        Signout,
        setMail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
