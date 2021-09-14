import { Button, Hidden, makeStyles, Paper } from '@material-ui/core'
import React from 'react'


const createData = (name, href) => {
  return {name, href};
};

const navLists = [
  createData('about', 'about'),
  createData('highlights', 'highlights'),
  createData('installation', 'installation'),
  createData('our team', 'team'),
];

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    backgroundColor: 'transparent',
  },
  button: {
    fontSize: theme.typography.h5.fontSize,
    width: '100%',
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    fontFamily: 'Rubik, sans-serif',
  }
}));

// the navigation will be hidden for screen <= sm
export default function Navigation() {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Paper
        className={classes.root}
        elevation={2}
      >
        {navLists.map((item) => (
          <Button
            className={classes.button}
            key={item.name}
            href={`#${item.href}`}
            variant='text'
            size='large'
          >
            {item.name}
          </Button>
        ))}
      </Paper>
    </Hidden>
  )
}
