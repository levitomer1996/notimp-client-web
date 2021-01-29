import React, { useReducer } from "react";

const AccountPageContext = React.createContext();
const AccountPageReducer = (state, action) => {
  switch (action.type) {
    case "set_page":
      return { ...state, page: action.payload };

    default:
      break;
  }
};

export const AccountPageProvider = ({ children }) => {
  const [accountPageState, dispatch] = useReducer(AccountPageReducer, {
    page: null,
  });
  const setPage = (data) => {
    dispatch({ type: "set_page", payload: data });
  };

  return (
    <AccountPageContext.Provider
      value={{
        accountPageState,
        setPage,
      }}
    >
      {children}
    </AccountPageContext.Provider>
  );
};
export default AccountPageContext;
