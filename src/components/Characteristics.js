import { Card, CardActionArea, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faGem,  } from '@fortawesome/free-solid-svg-icons';
import UpdateIcon from '@material-ui/icons/Update';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: 345,
    height: '100%',
  },
  cardArea: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  text: {
    paddingBottom: theme.spacing(3),
  },
  icon: {
    fontSize: theme.typography.h2.fontSize,
    color: '#f05f40db', // '#9e9e9e'
    margin: '0 auto',
    paddingBottom: theme.spacing(3),
  }
}));


const createData = (name, description, icon) => {
  return {name, description, icon};
};


export default function Characteristics({id}) {
  const classes = useStyles();

  // to add more characteristics, append here. 
  // can set icon = null if you haven't found a new icon
  const cards = [
    createData(
      'Uniform Interface', 
      'We apply a wrapper to make the kernel having the same interface as cuSPARSE.', 
      <FontAwesomeIcon className={classes.icon} icon={faGem}/>
    ),
    createData(
      'Easy to Use', 
      'You can load our library simply by using the .so file provided.', 
      <FontAwesomeIcon className={classes.icon} icon={faPaperPlane}/>
    ),
    createData(
      'Up to Date', 
      'We maintain and update high-performance sparse kernels for new GPU\'s architecture.', 
      <UpdateIcon className={classes.icon} />
    ),
  ];

  const CharacteristicCard = ({name, description, icon}) => {
    return (
      <Card className={classes.card}>
        <CardActionArea className={classes.cardArea}>
          {icon}
          <Typography
            variant="h5"
            className={classes.text}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.text}
          >
            {description}
          </Typography>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <div className={classes.root} id={id}>
      <Typography
        variant="h3"
        display="block"
        gutterBottom={true}
      >
        Characteristics
      </Typography>
      <Grid 
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={3}
      >
        {cards.map((card, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={4}
            >
              <CharacteristicCard {...card} />
            </Grid>
          )
        )}
      </Grid>
    </div>
  )
}