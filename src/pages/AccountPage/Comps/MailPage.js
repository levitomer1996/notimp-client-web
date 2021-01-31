import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./AccountPage.style";
const MailPageCard = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.mailPaper}>
      <Typography>From : Someone</Typography>
      <Typography
        style={{
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        kljdaskjsabndkjaskdjsabkjdsabjkkljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjkkljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjkkljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjkkljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjkkljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk kljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk kljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk kljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk kljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk kljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk kljdaskjsabndkjaskdjsabkjdsabjk
        kljdaskjsabndkjaskdjsabkjdsabjk
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
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <MailPageCard />
      </Grid>
      <Grid item>
        <MailPageCard />
      </Grid>
    </Grid>
  );
};

export default MailPage;
