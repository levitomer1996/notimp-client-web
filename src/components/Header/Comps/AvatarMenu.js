import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase";
import AuthContext from "../../../context/AuthContext";
export default function AvatarMenu({ img_url, displayName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { Signout } = useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar alt={displayName} src={img_url} onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <a href="/profile" style={{ textDecoration: "none", color: "black" }}>
            Profle
          </a>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          My account
        </MenuItem>
        <MenuItem
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then((res) => {
                Signout();
                handleClose();
              });
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
