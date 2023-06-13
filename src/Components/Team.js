import "./Team.css";
import Tianyu from "../img/members/tianyu.png";
import Hengrui from "../img/members/hengrui.jpeg";
import Zhongming from "../img/members/zhongming.jpeg";
import Guohao from "../img/members/guohao.jpeg";
import Hongke from "../img/members/hongke.jpeg";
import Wangyu from "../img/members/wangyu.jpeg";
import Guyue from "../img/members/guyue.jpg";
import Genghan from "../img/members/genghan.jpg";
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
    paddingBottom: theme.spacing(5),
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

  const TeamBox = ({ name, title, img, href }) => {
    return (
      <Card className="card">
        <Card.Img variant="top" src={img} />
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
        className="justify-content-md-center align-items-sm-stretch"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Col xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Guohao Dai"
            title="Core Lead"
            img={Guohao}
            href="http://nicsefc.ee.tsinghua.edu.cn/people/GuohaoDai"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Zhongming Yu"
            title="Developing Lead"
            img={Zhongming}
            href="https://fishmingyu.github.io"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Guyue Huang"
            title="Core Contributor"
            img={Guyue}
            href="https://hgyhungry.github.io/"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Genghan Zhang"
            title="Core Contributor"
            img={Genghan}
            href="https://zhang677.github.io/"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Ke Hong"
            img={Hongke}
            href="http://nicsefc.ee.tsinghua.edu.cn/people/KeHong"
            title="Core Contributor"
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Hengrui Zhang"
            title="Core Contributor"
            img={Hengrui}
            href="https://www.linkedin.com/in/hengrui-zhang-princeton/"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Tianyu Fu"
            title="Contributor"
            img={Tianyu}
            href="https://fuvty.notion.site/Homepage-55f41fe192df49379ea39b69e8fc08f3"
            classname={classes.teambox}
          />
        </Col>
        <Col item xs={6} sm={6} md={4} lg={3} style={{ paddingTop: 20 }}>
          <TeamBox
            name="Yu Wang"
            title="Advisor"
            img={Wangyu}
            href="http://nicsefc.ee.tsinghua.edu.cn/people/YuWang"
            classname={classes.teambox}
          />
        </Col>
      </Row>
    );
  };
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Container className={classes.root}>
        <TeamBoxes />
      </Container>
      <Footer />
    </Grid>
  );
}
