import React, { useContext, useEffect } from "react";
import { useStyles } from "./Comps/AccountPage.style";
import SideMenu from "./Comps/SideMenu";
import RenderPage from "./Comps/RenderPage";
import AccountPageContext from "../../context/AccountContext";
import AuthContext from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
const AccountPage = () => {
  const { accountPageState } = useContext(AccountPageContext);
  const { page } = accountPageState;
  const { authState } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <div>
      {!authState.isLogged ? <Redirect to="/" /> : null}
      <div className={classes.root}>
        <div className={classes.root_children}>
          <SideMenu />
        </div>
        <div className={classes.root_children}>
          {accountPageState.page === null ? null : (
            <RenderPage page={accountPageState.page} />
          )}
        </div>
      </div>
      <div className={classes.rootMobile}>
        <RenderPage page={page} />
      </div>
    </div>
  );
};
export default AccountPage;
