import React, { useReducer } from "react";

const ModalContext = React.createContext();
const ModalReducer = (state, action) => {
  switch (action.type) {
    case "set_is_open":
      return {
        ...state,
        isOpen: action.payload.isOpen,
        content: action.payload.content,
        params: action.payload.params,
      };
    case "set_modal_content":
      return { ...state, content: action.payload };
    default:
      break;
  }
};

export const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    content: null,
    params: {},
  });

  const setIsModalOpen = (content, params) => {
    modalState.isOpen
      ? dispatch({
          type: "set_is_open",
          payload: { isOpen: false, content: null, params: null },
        })
      : dispatch({
          type: "set_is_open",
          payload: { isOpen: true, content, params },
        });
  };

  const setModalContent = (data) => {
    dispatch({ type: "set_modal_content", payload: data });
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        setIsModalOpen,
        setModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
