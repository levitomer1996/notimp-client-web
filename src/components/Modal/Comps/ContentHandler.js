import React from "react";
import ShareModal from "./ShareModal";

export default function ContentHandler({ content }) {
  console.log(content);
  switch (content) {
    case "share":
      return <ShareModal />;

    default:
      break;
  }
}
