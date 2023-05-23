import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Team from "./Contact";
import Installation from "./Installation";

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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function NavbarComp() {
  const classes = useStyles();
  return (
    <Router>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Navbar expand="lg">
            <Navbar.Brand href="/">dgSPARSE</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="justify-content-end"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/installation">
                  Install
                </Nav.Link>
                <Nav.Link as={Link} to="/eco">
                  Ecosystem
                </Nav.Link>
                <Nav.Link as={Link} to="/team">
                  Team
                </Nav.Link>
                <Nav.Link as={Link} to="/doc">
                  Docs
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/eco">Eco</Route>
          <Route
            exact
            path="/doc"
            render={() => {
              window.location.href = "https://dgsparse.github.io/dgSPARSE-doc/";
            }}
          />
          <Route path="/installation">
            <Installation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// use exact to set default page, e.g. Home
// use render() attribute to dynamic reguide the href to absolute html
