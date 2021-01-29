import React, { useContext, useEffect } from "react";
import { useStyles } from "./Comps/AccountPage.style";
import SideMenu from "./Comps/SideMenu";
import RenderPage from "./Comps/RenderPage";
import AccountPageContext from "../../context/AccountContext";
const AccountPage = () => {
  const { accountPageState } = useContext(AccountPageContext);
  const { page } = accountPageState;
  const classes = useStyles();
  useEffect(() => {
    console.log(accountPageState);
  }, [accountPageState]);
  return (
    <div>
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
