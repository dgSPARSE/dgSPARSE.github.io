import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    marginTop: 20,
  },
})


function App() {
  const classes = useStyles();

  return (
    <>
      <Header/>

      <Grid className={classes.main} 
        container
        direction='row' 
        justifyContent="center" 
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={false} sm={1} />
        <Grid item xs={false} sm={2}><Navigation /></Grid>
        <Grid item xs={12} sm={8}><Content /></Grid>
        <Grid item xs={false} sm={1} />
      </Grid>

      <Footer/>
    </>
  );
}

export default App;
