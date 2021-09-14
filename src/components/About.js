import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Image from '../img/dgsparse.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(6),
  },
  img: {
    display: 'block',
    margin: 'auto',
    width: '90%',
    objectFit: 'contain',
    paddingTop: theme.spacing(1),
  },
  title: {
    fontFamily: 'Rubik, sans-serif',
  },
}));

export default function About({id}) {
  const classes = useStyles();

  return (
    <div id={id} className={classes.root}>
      <Typography
        className={classes.title}
        variant="h3"
        display="block"
        gutterBottom={true}
      >
        About
      </Typography>
      <Typography
        variant="body1"
        paragraph={true}
        component="p"
      >
        The dgSPARSE (Deep Graph Sparse) project provides capability of sparse kernel acceleration on GPUs. <br/>
        Currently dgSPARSE provides dgSPARSE Wrapper and dgSPARSE Library.
      </Typography>
      <img className={classes.img} alt="dg sparse" src={Image}/>
    </div>
  )
}
