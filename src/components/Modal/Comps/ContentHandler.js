import React from "react";
import ShareModal from "./ShareModal";

export default function ContentHandler({ content }) {
  
  switch (content) {
    case "share":
      return <ShareModal />;

    default:
      break;
  }
}
