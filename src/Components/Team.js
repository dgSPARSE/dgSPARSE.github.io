import "./Team.css";
import Member1 from "../img/Member1.jpg";
import Member2 from "../img/Member2.jpg";
import Member3 from "../img/Member3.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ContactsIcon from "@material-ui/icons/Contacts";
import Frame from "./Frame";
import Footer from "./Footer";
import {
  Button,
  Grid,
  Paper,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { borderRadius } from "@material-ui/system";
import Container from "react-bootstrap/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
  },
  rows: {
    paddingTop: theme.spacing(5),
  },
  teambox: {
    maxWidth: 300,
    objectFit: "contain",
    paddingTop: theme.spacing(5),
  },
}));

export default function Team() {
  const classes = useStyles();
  const title = "Our Core Team";
  const subtitle =
    "We are ethusiastic about optimizing applications related to sparsity and making them faster and more accessible.";

  const ContactBtn = ({ href }) => {
    return (
      <IconButton color="info" size="large" href={href}>
        <ContactsIcon />
      </IconButton>
    );
  };

  const LinkedinBtn = ({ href }) => {
    return (
      <IconButton color="info" size="large" href={href}>
        <LinkedInIcon />
      </IconButton>
    );
  };

  const TeamBox = ({ name, title, href }) => {
    return (
      <Card className="card">
        <Card.Img variant="top" src={Member1} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <ContactBtn href={href} />
        </Card.Body>
      </Card>
    );
  };

  const TeamBoxes = () => {
    return (
      <Row
        className="justify-content-md-center"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Col xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Guohao Dai"
            title="Core Lead"
            href="http://nicsefc.ee.tsinghua.edu.cn/people/GuohaoDai"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Zhongming Yu"
            title="Developing Lead"
            href="https://fishmingyu.github.io"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Guyue Huang"
            title="Core Contributor"
            href="https://hgyhungry.github.io/"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Genghan Zhang"
            title="Core Contributor"
            href="https://zhang677.github.io/"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox name="Hong Ke" title="Core Contributor" />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Hengrui Zhang"
            title="Core Contributor"
            href="https://www.linkedin.com/in/hengrui-zhang-princeton/"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Jiaming Xu"
            title="Contributor"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox name="Yu Wang" title="Advisor" classname={classes.teambox} />
        </Col>
      </Row>
    );
  };
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Container>
        <TeamBoxes />
      </Container>
      <Footer />
    </Grid>
  );
}
