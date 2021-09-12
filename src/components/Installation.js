import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import commands from './commands';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },


}));

// cuda: None, 10.1, 11.1,
// package: Stable, Nightly Build
// os: Linux, Windows, Mac,
// python: 3.6 3.7,




export default function Installation({id}) {
  const classes = useStyles();

  // const [cuda, setCudaIdx] = React.useState(0);
  // const [packageIdx, setPackageIdx] = React.useState(0);
  // const [osIdx, setOsIdx] = React.useState(0);
  // const [python]





  return (
    <div id={id} className={classes.root}>
      <Typography
        variant="h3"
        display="block"
        gutterBottom={true}
      >
        Installation
      </Typography>
    </div>
  )
}
