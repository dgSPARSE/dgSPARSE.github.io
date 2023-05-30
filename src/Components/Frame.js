import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import Image from "../img/sparse_graph_2.jpg";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "22.8vh",
    },
    [theme.breakpoints.between("xs", "md")]: {
      height: "27.8vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "36.8vh",
    },

    display: "block",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    opacity: 0.25,
    left: "0",
    top: "0",
    width: "inherit",
    height: "inherit",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    textAlign: "center",
    top: "55%",
    left: "50%",
    color: "black",
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

export default function Frame({ title, subtitle, icon }) {
  const classes = useStyles();
  const Title = () => {
    return (
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.title}
          paragraph={true}
          variant="h3"
          gutterBottom={true}
        >
          {title}
        </Typography>
      </ThemeProvider>
    );
  };

  const SubTitle = () => {
    return (
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.subtitle}
          paragraph={true}
          variant="h5"
          gutterBottom={true}
        >
          {subtitle}
        </Typography>
      </ThemeProvider>
    );
  };

  const BackgroundImage = () => (
    <img className={classes.img} src={Image} alt="background" />
  );

  return (
    <Grid>
      <Grid md={12} className={classes.root} elevation={0}>
        <BackgroundImage />
        <div className={classes.overlay} elevation={5}>
          <Title />
          <SubTitle />
        </div>
      </Grid>
    </Grid>
  );
}
