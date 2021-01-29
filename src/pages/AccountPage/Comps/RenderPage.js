import React from "react";
import MailPage from "./MailPage";
import AccountAssetsPage from "./AccountAssetsPage";

export default function RenderPage({ page }) {
  switch (page) {
    case null:
      return <div>Nukk</div>;
    case "mail":
      return <MailPage />;
    case "assets":
      return <AccountAssetsPage />;
    default:
      break;
  }
}
