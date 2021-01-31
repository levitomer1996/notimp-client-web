import React, { useContext } from "react";
import { useStyles } from "./AccountPage.style";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MailIcon from "@material-ui/icons/Mail";
import DraftsIcon from "@material-ui/icons/Drafts";
import AccountPageContext from "../../../context/AccountContext";
import HomeIcon from "@material-ui/icons/Home";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const { setPage } = useContext(AccountPageContext);
  const classes = useStyles();

  return (
    <div className={classes.SideMenuRoot}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          onClick={() => {
            setPage("mail");
          }}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>{" "}
        <ListItem
          button
          onClick={() => {
            setPage("assets");
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Assets" />
        </ListItem>
      </List>
    </div>
  );
}
