import React, { useEffect, useContext, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AuthContext from "../../context/AuthContext";
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase";
import FoundAsset from "./Comps/FoundAsset";
import AvatarMenu from "./Comps/AvatarMenu";
import useSearchAsset from "../../hooks/useSearchAsset";
import { Redirect } from "react-router-dom";
import useStyles from "./Comps/Header.style";

export default function Header({ isFireBaseInitialzied }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { Signin, authState, Signout } = useContext(AuthContext);
  const [foundAssets, searchAsset, spinner] = useSearchAsset();
  const [redirect, setRedirect] = useState({ isRedirect: false, path: null });
  useEffect(() => {
    if (isFireBaseInitialzied) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          Signin(user);
        } else {
        }
      });
    }
  }, [isFireBaseInitialzied]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {authState.isLogged ? (
        <>
          <MenuItem
            button
            onClick={() => {
              setRedirect({ path: "/profile", isRedirect: true });
            }}
          >
            <Avatar
              alt={authState.user.displayName}
              src={authState.user.photoURL}
            />
            <p>Profile</p>
          </MenuItem>
          <MenuItem
            button
            onClick={() => {
              setRedirect({ path: "/account", isRedirect: true });
            }}
          >
            <Badge badgeContent={0} color="secondary">
              <AccountCircle />
            </Badge>

            <p>Account</p>
          </MenuItem>
          <MenuItem
            button
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then((res) => {
                  Signout();
                });
            }}
          >
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <ExitToAppIcon />
            </IconButton>
            <p>Signout</p>
          </MenuItem>
        </>
      ) : (
        <a href="/signin" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem button>
            <p>Sign in</p>
          </MenuItem>
        </a>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {redirect.isRedirect ? <Redirect to={redirect.path} /> : null}
      <AppBar position="static" style={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <strong>Notimp</strong>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                "aria-label": "search",
                onChange: (e) => searchAsset(e.target.value),
              }}
            />
            <FoundAsset list={foundAssets} spinner={spinner} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {authState.isLogged ? (
              <AvatarMenu
                img_url={authState.user.photoURL}
                displayName={authState.user.displayName}
              />
            ) : (
              <a
                href="signin"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <Button color="inherit">Login</Button>
              </a>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
