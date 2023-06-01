import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Image1 from "../img/hyper-overview.png";
import Image2 from "../img/sparse_graph_2.jpg";
import Image3 from "../img/sparse_graph_3.jpg";

import { grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel";
import Frame from "./Frame";
import ReactMarkdown from "react-markdown";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Divider from "@material-ui/core/Divider";
import Container from "react-bootstrap/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  img: {
    display: "block",
    margin: "auto",
    width: "90%",
    objectFit: "contain",
    paddingTop: theme.spacing(1),
  },
  title: {
    fontFamily: "Rubik, sans-serif",
  },
  citation: {
    color: grey[600],
    paddingTop: theme.spacing(1),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function About() {
  const classes = useStyles();

  const title = "About";
  const subtitle = "Highlighted papers and designs in dgSPARSE";

  const ShortCut = () => {
    return (
      <Grid
        item
        xs={11}
        md={4}
        // style={{ textAlign: "left" }}
        // alignItems="center"
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText
              primary="ShortCut"
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemLink>
        </List>
      </Grid>
    );
  };

  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Container className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <ShortCut />
          <Grid
            item
            xs={11}
            md={8}
            style={{ textAlign: "left" }}
            classname={classes.col}
          ></Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
