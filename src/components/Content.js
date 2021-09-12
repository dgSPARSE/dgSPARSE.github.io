import { makeStyles } from '@material-ui/core'
import React from 'react'
import About from './About';
import Characteristics from './Characteristics';
import TeamMembers from './TeamMembers';
import License from './License';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    border: '1px solid black',
    minHeight: '1800px',
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <About id="about"/>
      <Characteristics id="characteristics" />
      <TeamMembers id="teammembers"/>
      <License id="license"/>
    </div>
  )
}
