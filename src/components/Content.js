import { makeStyles } from '@material-ui/core'
import React from 'react'
import About from './About';
import Highlights from './Highlights';
import Team from './Team';
import Installation from './Installation';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid black',
    width: '90%',
    margin: '0 auto',
  },
}));


// here the id should be the same as in Navigation.js

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <About id="about"/>
      <Highlights id="highlights" />
      <Installation id="installation"/>
      <Team id="team"/>
    </div>
  )
}
