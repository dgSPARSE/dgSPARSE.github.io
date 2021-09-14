import { Button, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'
import React, {useRef} from 'react'

import About from './About';
import Highlights from './Highlights';
import Team from './Team';
import Installation from './Installation';


const useStyles = makeStyles((theme) => ({
  navList: {
    borderRadius: theme.spacing(1),
    backgroundColor: 'transparent',
    position: 'sticky',
    alignSelf: 'start',
    top: '2.5em',
  },
  navButton: {
    fontSize: theme.typography.h5.fontSize,
    width: '100%',
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    fontFamily: 'Rubik, sans-serif',
  },
  content: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));


export default function Main() {
  const classes = useStyles();

  // for the scroll into view, create some useRef 
  const aboutRef = useRef(null);
  const highlightsRef = useRef(null);
  const installRef = useRef(null);
  const teamRef = useRef(null);

  // when click the button, scroll into the view
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView();
  };


  // the navlist has multiple nav buttons
  const NavButton = ({name, onClick}) => {
    return (
      <Button
        className={classes.navButton}
        variant='text'
        size='large'
        onClick={onClick}
      >
        {name}
      </Button>
    );
  }

  // the navlist disappears for screen <= sm
  const NavList = () => {
    return (
      <Hidden smDown>
        <Paper
          className={classes.navList}
        >
          <NavButton name='About' onClick={()=>scrollToRef(aboutRef)} />
          <NavButton name='Highlights' onClick={()=>scrollToRef(highlightsRef)} />
          <NavButton name='Installation' onClick={()=>scrollToRef(installRef)} />
          <NavButton name='Team' onClick={()=>scrollToRef(teamRef)} />
        </Paper>
      </Hidden>
    );
  };

  // use innerRef to bypass the warning, and register the ref inside each component
  return (
    <Grid
      item
      container
      direction='row'
      justifyContent="space-around"
    >
      <Grid item xs={false} sm={2}>
        <NavList />
      </Grid>

      <Grid item xs={12} sm={8} className={classes.content}>
        <About innerRef={aboutRef} />
        <Highlights innerRef={highlightsRef} />
        <Installation innerRef={installRef} />
        <Team innerRef={teamRef} />
      </Grid>
    </Grid>
  )
}
