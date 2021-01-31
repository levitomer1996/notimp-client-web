import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./AccountPage.style";
import AuthContext from "../../../context/AuthContext";
import * as moment from "moment";
const MailPageCard = (props) => {
  const classes = useStyles();
  const { displayName, title, content, time_posted } = props;
  return (
    <Paper elevation={3} className={classes.mailPaper}>
      <Typography>From : {displayName}</Typography>
      <Typography style={{ fontSize: "13px" }}>
        {moment(time_posted).format("MMMM Do YYYY, h:mm:ss a")}
      </Typography>
      <Typography style={{ padding: 5, borderBottom: "1px solid #80808042" }}>
        {title}
      </Typography>
      <Typography
        style={{
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          padding: 5,
        }}
      >
        {content}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: "orange", fontWeight: "bold" }}
      >
        Read
      </Button>
    </Paper>
  );
};
const MailPage = () => {
  const { authState } = useContext(AuthContext);
  const { mail } = authState;
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      {mail.map((mail) => {
        return (
          <Grid item>
            <MailPageCard
              displayName={mail.sender_display_name}
              content={mail.content}
              title={mail.title}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MailPage;
