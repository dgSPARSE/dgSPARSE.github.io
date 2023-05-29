import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Image from "../img/sparse_graph_2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "22.8vh",
    display: "block",
  },
  img: {
    opacity: 0.25,
    left: "0",
    top: "0",
    width: "inherit",
    height: "inherit",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      top: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "35%",
    },
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Libre Baskerville, serif",
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    textAlign: "center",
  },
}));

export default function Frame({ title, subtitle }) {
  const classes = useStyles();

  const Title = () => {
    return (
      <Typography
        className={classes.title}
        variant="h3"
        paragraph={true}
        gutterBottom={true}
      >
        {title}
      </Typography>
    );
  };

  const SubTitle = () => {
    return (
      <Typography
        className={classes.subtitle}
        variant="h5"
        paragraph={true}
        gutterBottom={true}
      >
        {subtitle}
      </Typography>
    );
  };

  const BackgroundImage = () => (
    <img className={classes.img} src={Image} alt="background" />
  );

  return (
    <Grid>
      <Paper className={classes.root} elevation={0}>
        <BackgroundImage />
        <div className={classes.content} elevation={5}>
          <Title />
          <SubTitle />
        </div>
      </Paper>
    </Grid>
  );
}
