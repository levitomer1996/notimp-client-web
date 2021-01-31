import React, { useReducer } from "react";

const IndexContext = React.createContext();
const IndexReducer = (state, action) => {
  switch (action.type) {
    case "set_assets":
      return { ...state, assets: action.payload };

    default:
      break;
  }
};

export const IndexProvider = ({ children }) => {
  const [indexState, dispatch] = useReducer(IndexReducer, {
    assets: [],
  });

  const setAssets = (data) => {
    dispatch({ type: "set_assets", payload: data });
  };

  return (
    <IndexContext.Provider
      value={{
        indexState,
        setAssets,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};
export default IndexContext;
