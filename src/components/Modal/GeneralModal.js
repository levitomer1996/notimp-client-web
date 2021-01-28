import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import ModalContext from "../../context/ModalContext";
import useStyles, { getModalStyle } from "./Comps/Modal.style";
import CloseIcon from "@material-ui/icons/Close";
import ContentHandler from "./Comps/ContentHandler";
import ShareModal from "./Comps/ShareModal";
export default function GeneralModal({ type }) {
  const { modalState, setIsModalOpen } = useContext(ModalContext);
  const { isOpen, content } = modalState;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.close_btn_container}>
        <IconButton onClick={setIsModalOpen}>
          <CloseIcon />
        </IconButton>
      </div>
      <ShareModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={setIsModalOpen}
      >
        {body}
      </Modal>
    </div>
  );
}
