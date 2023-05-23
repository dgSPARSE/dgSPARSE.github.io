import { Button, Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import React, { Component } from "react";
import Highlights from "./Highlights";
import Header from "./Header";
import Footer from "./Footer";
import { FormText } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  navList: {
    borderRadius: theme.spacing(1),
    backgroundColor: "transparent",
    position: "sticky",
    alignSelf: "start",
    top: "2.5em",
  },
  navButton: {
    fontSize: theme.typography.h5.fontSize,
    width: "100%",
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    fontFamily: "Rubik, sans-serif",
  },
  content: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid>
      <Header />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item xs={12} sm={8} className={classes.content}>
          <Highlights />
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
