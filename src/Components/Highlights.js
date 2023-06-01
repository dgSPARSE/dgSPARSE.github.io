import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faGem } from "@fortawesome/free-solid-svg-icons";
import UpdateIcon from "@material-ui/icons/Update";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  grid: {
    paddingTop: theme.spacing(2),
  },
  card: {
    borderWidth: "0px",
    height: "100%",
    boxShadow: "1px 2px 2px 2px rgba(239, 239, 240, 1)",
    "&:hover": {
      boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253)",
    },
  },
  cardArea: {
    height: "100%",
    padding: theme.spacing(3),
    paddingTop: theme.spacing(5),
    textAlign: "center",
  },
  text: {
    paddingBottom: theme.spacing(3),
  },
  icon: {
    fontSize: theme.typography.h2.fontSize,
    color: "#f05f40db", // '#9e9e9e'
    margin: "0 auto",
    paddingBottom: theme.spacing(3),
  },
  title: {
    fontFamily: "Rubik, sans-serif",
  },
}));

const createData = (name, description, icon) => {
  return { name, description, icon };
};

export default function Highlights({ innerRef }) {
  const classes = useStyles();

  // to add more characteristics, append here.
  // can set icon = null if you haven't found a new icon
  const cards = [
    createData(
      "Uniform Interface",
      "We apply a wrapper to make the kernel having the same interface as cuSPARSE.",
      <FontAwesomeIcon className={classes.icon} icon={faGem} />
    ),
    createData(
      "Easy to Use",
      "You can load our library simply by using the .so file provided.",
      <FontAwesomeIcon className={classes.icon} icon={faPaperPlane} />
    ),
    createData(
      "Up to Date",
      "We maintain and update high-performance sparse kernels for new GPU's architecture.",
      <UpdateIcon className={classes.icon} />
    ),
  ];

  const CharacteristicCard = ({ name, description, icon }) => {
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardArea}>
          {icon}
          <Typography variant="h5" className={classes.text}>
            {name}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={classes.root} ref={innerRef}>
      <Typography
        variant="h3"
        display="block"
        gutterBottom={true}
        className={classes.title}
      >
        Highlights
      </Typography>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        {cards.map((card, idx) => (
          <Grid key={idx} item xs={10} sm={6} md={4}>
            <CharacteristicCard {...card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
