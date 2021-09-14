import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';
import { Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: '#fcfcfc',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(0.5),
    }
  },
  navigation: {
    position: 'sticky',
    alignSelf: 'start',
    top: '2.5em',
  },
}));


function App() {
  const classes = useStyles();

  return (
    <>
      <Header/>

      <Grid className={classes.mainContent} 
        container
        direction='row' 
        justifyContent="center" 
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={false} sm={1} />
        <Grid item xs={false} sm={2} className={classes.navigation}>
          <Navigation />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>

      <Footer/>
    </>
  );
}

export default App;
