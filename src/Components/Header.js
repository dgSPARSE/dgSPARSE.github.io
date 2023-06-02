import { Button, Grid, Paper, Typography } from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import React from "react";
import Image from "../img/sparse_graph_1.jpg";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "61.8vh",
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

  content: {
    position: "absolute",
    textAlign: "center",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  title: {
    fontFamily: "Libre Baskerville, serif",
    [theme.typography.h1]: {
      [theme.breakpoints.up("md")]: {
        fontSize: "95",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "75",
      },
    },
    // fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    [theme.typography.h5]: {
      [theme.breakpoints.up("md")]: {
        fontSize: "24",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "20",
      },
    },
  },
  button: {
    margin: theme.spacing(2),
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default function Header() {
  const classes = useStyles();

  const Title = () => {
    return (
      <Typography
        className={classes.title}
        paragraph={true}
        variant="h1"
        gutterBottom={true}
      >
        dgSPARSE
      </Typography>
    );
  };

  const SubTitle = () => {
    return (
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.subtitle}
          variant="h5"
          paragraph={true}
          gutterBottom={true}
        >
          Fast and Efficient Processing for Various Machine Learning
          Applications with Diverse Sparsity
        </Typography>
      </ThemeProvider>
    );
  };

  const BtnInstall = () => {
    return (
      <Button
        className={classes.button}
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GetAppIcon />}
        href="#installation"
      >
        Install
      </Button>
    );
  };

  const BtnGithub = () => {
    return (
      <Button
        className={classes.button}
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GitHubIcon />}
        href="https://github.com/dgSPARSE"
      >
        Github
      </Button>
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
          <div>
            <BtnGithub />
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
