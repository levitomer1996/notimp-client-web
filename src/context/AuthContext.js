import React, { useReducer } from "react";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isLogged: true, user: action.payload };
    case "signout":
      return { ...state, isLogged: false, user: {} };

    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
    isModalOpen: false,
  });

  const Signin = (data) => {
    dispatch({ type: "signin", payload: data });
    return;
  };
  const Signout = () => {
    dispatch({ type: "signout" });
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        Signin,
        Signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
