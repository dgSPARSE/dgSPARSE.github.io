import "./Team.css";
import Member1 from "../img/Member1.jpg";
import Member2 from "../img/Member2.jpg";
import Member3 from "../img/Member3.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ContactsIcon from "@material-ui/icons/Contacts";
import Frame from "./Frame";
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

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
  },
  rows: {
    paddingTop: theme.spacing(5),
  },
}));

export default function Team() {
  const classes = useStyles();
  const title = "The Core dgSPARSE Team";
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

  const TeamBox = ({ name, title }) => {
    return (
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Member1} width="100px" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <ContactBtn />
        </Card.Body>
      </Card>
    );
  };
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item xs={12} sm={9} id="teamcards" className={classes.root}>
          <Row className={classes.rows}>
            <Col md={3}>
              <TeamBox name="Guohao Dai" title="Core Lead" />
            </Col>
            <Col md={3}>
              <TeamBox name="Zhongming Yu" title="Developing Lead" />
            </Col>
            <Col md={3}>
              <TeamBox name="Hong Ke" title="Core Contributor" />
            </Col>
            <Col md={3}>
              <TeamBox name="Genghan Zhang" title="Core Contributor" />
            </Col>
          </Row>
          <Row className={classes.rows}>
            <Col md={3}>
              <TeamBox name="Guyue Huang" title="Core Contributor" />
            </Col>
            <Col md={3}>
              <TeamBox name="Hengrui Zhang" title="Core Contributor" />
            </Col>
            <Col md={3}>
              <TeamBox name="Jiaming Xu" title="Contributor" />
            </Col>
            <Col md={3}>
              <TeamBox name="Yu Wang" title="Advisor" />
            </Col>
          </Row>
        </Grid>
      </Grid>
    </Grid>
  );
}
