import { Link, makeStyles, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import Image1 from "../img/hyper-overview.png";
import Image2 from "../img/sparse-conv.png";
import Image3 from "../img/sparse_graph_3.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
import Button from "@material-ui/core/Button";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    fontFamily: "Rubik, sans-serif",
  },
  img: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      height: 300,
    },
    [theme.breakpoints.between("xs", "md")]: {
      height: 250,
    },
    [theme.breakpoints.between("sm", "xs")]: {
      height: 180,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
    },
    objectFit: "contain",
  },
  citation: {
    color: grey[600],
    paddingTop: theme.spacing(1),
  },
  card: {
    borderWidth: "0px",
    boxShadow: "1px 2px 2px 2px rgba(239, 239, 240, 1)",
    "&:hover": {
      boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
    },
    fontFamily: "Rubik, sans-serif",
    spacing: 3,
  },
  col: {
    paddingTop: theme.spacing(6),
  },
  gridcard: {
    paddingTop: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function About() {
  const classes = useStyles();

  const title = "About";
  const subtitle = "Highlighted papers and designs in dgSPARSE";

  const hgnnRef = useRef(null);
  const pcRef = useRef(null);

  // when click the button, scroll into the view
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView();
  };

  const ShortCut = () => {
    return (
      <Grid
        item
        xs={11}
        md={2}
        // style={{ textAlign: "left" }}
        // alignItems="center"
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemText
              primary="ShortCut"
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button onClick={() => scrollToRef(hgnnRef)}>
            <ListItemText primary="Hypergraph Neural Network" />
          </ListItem>
          <ListItem button onClick={() => scrollToRef(pcRef)}>
            <ListItemText primary="Pointcloud Sparse Convolution" />
          </ListItem>
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
            md={10}
            style={{ textAlign: "left" }}
            classname={classes.col}
          >
            <Grid className={classes.gridcard}>
              <Card xs={11} md={10} className={classes.card} ref={hgnnRef}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={Image1}
                    className={classes.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      HyperGraph Neural Network Acceleration
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Hypergraph Neural Network (HyperGNN) is an emerging type
                      of Graph Neural Networks (GNNs) that can utilize
                      hyperedges to model high-order relationships among
                      vertices. Current GNN frameworks fail to fuse two
                      message-passing steps from vertices to hyperedges and
                      hyperedges to vertices, leading to high latency and
                      redundant memory consumption. By enabling efficient fusion
                      for HyperGNNs, our HyperGef techinque achieves 2.25× to
                      3.99× end-to-end speedup on various HyperGNN models
                      compared with state-of-the-art frameworks like DGL and
                      PyG.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid className={classes.gridcard}>
              <Card xs={11} md={8} className={classes.card} ref={pcRef}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={Image2}
                    className={classes.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Pointcloud Sparse Convolution
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Sparse convolution is the key operator in widely-used 3D
                      point cloud networks. However, due to the high sparsity of
                      voxelized input point cloud data, three main challenges
                      need to be solved for efficient sparse convolution in
                      current 3D point cloud engines, like memory
                      under-utilization, input dynamics, etc. To tackle these
                      challenges, we propose PCEngine which achieves 1.81× and
                      1.64× speedup on average for sparse convolution operation
                      and end-to-end point cloud networks, respectively.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}
