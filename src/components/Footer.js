import React from 'react'
import { Link, makeStyles, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
  text: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: grey[600],
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant='caption'
        component='p'
        className={classes.text}
      >
        © dgSparse is licensed under the Apache License 2.0.
      </Typography>
      <Link
        className={classes.text}
        variant='caption'
        href='https://github.com/dgSPARSE'
      >
        @ Contact: dgSparse
      </Link>
      <Link
        className={classes.text}
        variant='caption'
        href='https://github.com/luke-mao'
      >
        @ Author: Luke
      </Link>
    </div>
  )
}
