import React from "react";
import ContactUser from "./ContactUser";
import ShareModal from "./ShareModal";

export default function ContentHandler({ content, params }) {
  switch (content) {
    case "share":
      return <ShareModal params={params} />;
    case "contact_user":
      return <ContactUser params={params} />;
    default:
      <div>Nothing to render</div>;
  }
}
