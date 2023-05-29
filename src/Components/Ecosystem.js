import { Link, makeStyles, Typography } from "@material-ui/core";
import { Button, Paper, IconButton } from "@material-ui/core";

import React from "react";

import { grey } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel";
import Frame from "./Frame";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "../img/dgsparse-logo.png";
import "./Ecosystem.css";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(6),
  },
  img: {
    display: "block",
    margin: "auto",
    width: "90%",
    objectFit: "contain",
    paddingTop: theme.spacing(1),
  },
}));

export default function Ecosystem() {
  const classes = useStyles();
  const title = "Ecosystem";
  const subtitle =
    "dgSPARSE has been integrated into many libraries and softwares. Here are some popular examples using dgSPARSE.";
  const GithubBtn = ({ href }) => {
    return (
      <IconButton color="primary" size="large" href={href}>
        <GitHubIcon />
      </IconButton>
    );
  };

  const GridCards = () => {
    return (
      <Row>
        <Col>
          <Card className="card">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <GithubBtn href="https://github.com/mit-han-lab/torchsparse" />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <GithubBtn href="https://github.com/mit-han-lab/torchsparse" />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <GithubBtn href="https://github.com/mit-han-lab/torchsparse" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  };
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item xs={12} sm={8} id="gridcards" className={classes.root}>
          <GridCards />
        </Grid>
      </Grid>
    </Grid>
  );
}
