import { makeStyles } from '@material-ui/core'
import React from 'react'
import About from './About';
import Characteristics from './Characteristics';
import TeamMembers from './TeamMembers';
import License from './License';
import Installation from './Installation';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    border: '1px solid black',
    minHeight: '1800px',
    width: '90%',
    margin: '0 auto',
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <About id="about"/>
      <Characteristics id="characteristics" />
      <Installation id="installation"/>
      <TeamMembers id="teammembers"/>
      <License id="license"/>
    </div>
  )
}
