import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./IndexPage.style";
import { baseUrl } from "../../../api/notimp";

export default function ParallexImage() {
  const props = {
    image_url: `https://i.ibb.co/yyByKTG/IMG-20210128-162604-01.jpg`,
  };
  const classes = useStyles(props);
  return (
    <div className={classes.parallex}>
      <div style={{ padding: 30 }}>
        <Typography>Notimp</Typography>
        <Typography>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          paragraphs words bytes lists Start with 'Lorem ipsum dolor sit
          amet...'
        </Typography>
      </div>
    </div>
  );
}
