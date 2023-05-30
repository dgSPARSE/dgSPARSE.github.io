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

export default function About() {
  const classes = useStyles();

  const title = "About";
  const subtitle = "Highlighted papers and designs in dgSPARSE";

  const ShortCut = () => {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h5>ShorCuts</h5>
          </ListSubheader>
        }
        className={classes.shortcut}
      >
        <Divider />
        <ListItem button>
          <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Starred" className={classes.nested} />
        </ListItem>
      </List>
    );
  };
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item xs={12} md={10} sm={9} className={classes.root}>
          <Row classname={classes.root}>
            <Col xm={false} xs={4} style={{ textAlign: "left" }}>
              <ShortCut />
            </Col>
            <Col xs={8} style={{ textAlign: "left" }} classname={classes.col}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>
      </Grid>
    </Grid>
  );
}

// export default function About() {
//   const classes = useStyles();

//   return (
//     <Grid item container direction="row" justifyContent="space-around">
//       <Grid item xs={12} sm={8} className={classes.content}>
//         <div className={classes.root}>
//           <Typography
//             className={classes.title}
//             variant="h3"
//             display="block"
//             gutterBottom={true}
//           >
//             About
//           </Typography>
//           <Typography variant="body1" paragraph={true} component="p">
//             The dgSPARSE (Deep Graph Sparse) project provides capability of
//             sparse kernel acceleration on GPUs. <br />
//             Currently dgSPARSE provides dgSPARSE Wrapper and dgSPARSE Library.
//           </Typography>
//           <img className={classes.img} alt="dgsparse" src={Image} />
//           <Link
//             href="https://nicsefc.ee.tsinghua.edu.cn/media/publications/2020/SC20_320.pdf"
//             variant="caption"
//             className={classes.citation}
//           >
//             © Guyue Huang, Guohao Dai, et al. "GE-SpMM: General-purpose Sparse
//             Matrix-Matrix Multiplication on GPUs for Graph Neural Networks", in
//             SC 2020.
//           </Link>
//           <br />
//           <Link
//             variant="caption"
//             className={classes.citation}
//             href="https://arxiv.org/abs/2103.00959"
//           >
//             © Yukuo Cen, Zhenyu Hou, et al. "CogDL: An Extensive Toolkit for
//             Deep Learning on Graphs", in arXiv. Link.
//           </Link>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }