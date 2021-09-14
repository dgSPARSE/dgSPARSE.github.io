import { Button, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Image from '../img/sparse_graph_1.jpg';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '61.8vh',
    display: 'block',
  },
  img: {
    opacity: 0.25,
    position: 'absolute',
    left: '0',
    top: '0',
    width: 'inherit',
    height: 'inherit',
    objectFit: 'cover',
  },
  content: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Libre Baskerville, serif',
  },
  subtitle: {
    fontFamily: 'Libre Baskerville, serif',
    fontWeight: 'bold',
  },
  button: {
    margin: theme.spacing(2),
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default function Header() {
  const classes = useStyles();

  const Title = () => {
    return (
      <Typography
        className={classes.title}
        variant="h1"
        paragraph={true}
        gutterBottom={true}
      >
        dgSPARSE
      </Typography>
    );
  };

  const SubTitle = () => {
    return (
      <Typography
        className={classes.subtitle}
        variant="h5"
        paragraph={true}
        gutterBottom={true}
      >
        Easy and Fast Sparse Graph Processing
      </Typography>
    );
  };

  const BtnInstall = () => {
    return (
      <Button
        className={classes.button}
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GetAppIcon/>}
      > 
        Install
      </Button>
    );
  };

  const BtnGithub = () => {
    return (
      <Button
        className={classes.button}
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GitHubIcon/>}
      > 
        Github
      </Button>
    );
  }

  const BackgroundImage = ()  => <img className={classes.img} src={Image} alt="background"/>;

  return (
    <Paper
      className={classes.root}
      elevation={2}
    >
      <BackgroundImage />
      <div className={classes.content}>
        <Title />
        <SubTitle />
        <div>
          <BtnInstall/>
          <BtnGithub/>
        </div>
      </div>
    </Paper>
  )
}
