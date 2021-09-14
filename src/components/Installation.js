import { Grid, IconButton, makeStyles, Paper, Snackbar, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


// function to convert commands into object
const createData = (cuda, os, python, ...steps) => {
  return {cuda, os, python, steps}
}

// put all your installation commands here !!!
const commands = [
  createData('10.1', 'Linux', '3.6', 'conda install -c dgsparse 10.1 linux 3.6', 'conda install -c dgsparse 10.1 linux 3.6', 'conda install -c dgsparse 10.1 linux 3.6'),
  createData('10.1', 'Mac', '3.6', 'conda -install -c dgsparse 10.1 mac 3.6'),
  createData('10.1', 'Windows', '3.6', 'conda -install -c dgsparse 10.1 windows 3.6'),

  createData('10.1', 'Linux', '3.7', 'conda install -c dgsparse 10.1 linux 3.7'),
  createData('10.1', 'Mac', '3.7', 'conda -install -c dgsparse 10.1 mac 3.7'),
  createData('10.1', 'Windows', '3.7', 'conda -install -c dgsparse 10.1 windows 3.7'),
];


const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  tabGrid: {
    paddingBottom: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
    backgroundColor: '#eeeeee',
    position: 'relative',         // for thhe icon button to stick to the top right corner
  },
  gapsBottom: {
    paddingBottom: theme.spacing(2),
  },
  iconButton: {
    position: 'absolute',
    top: '0',
    right: '0',                   // the icon button sticks to the top right corner
  },
  steps: {
    width: '90%',
  },
  title: {
    fontFamily: 'Rubik, sans-serif',
  },
}));

const OptionTabs = ({content, label, onChange, value, idx}) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.tabGrid}
      container
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Grid item xs={2}>
        <Typography variant="body1" style={{textAlign: "center"}}>{label}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Tabs
          onChange={(e, newValue) => onChange(idx, newValue)}
          indicatorColor="primary"
          textColor="primary"
          value={value}
        >
          {content.map((c) => {
            return (
              <Tab key={c} label={c}/>
            );
          })}
        </Tabs>
      </Grid>
    </Grid>
  );
}


export default function Installation({id}) {
  const classes = useStyles();

  // obtain all distinct options
  const cudaArray = [...new Set(commands.map(c => c.cuda))].sort();
  const osArray = [...new Set(commands.map(c => c.os))].sort();
  const pythonArray = [...new Set(commands.map(c => c.python))].sort();

  // use values to find the installation steps
  const findSteps = (opts) => {
    const results = commands.filter(obj => {
      return obj.cuda === cudaArray[opts[0]] 
        && obj.os === osArray[opts[1]]
        && obj.python === pythonArray[opts[2]]
    });

    // return the array of steps, or empty array
    return results.length === 0 ? [] : results[0].steps;
  }

  // first hook: store the chosen tab values
  const [values, setValues] = React.useState([0,0,0]);

  // second hook, store the stpes
  const [steps, setSteps] = React.useState(findSteps(values));


  // when user click on the tab, onChange will update the choices
  const onChange = (idx, newValue) => {
    const newValues = [...values];
    newValues[idx] = newValue;
    setValues(newValues);
    setSteps(findSteps(newValues)); // foce to update with new values immediately. 
  };

  // title
  const Title = () => {
    return (
      <Typography
        variant="h3"
        display="block"
        gutterBottom={true}
        className={classes.title}
      >
        Installation
      </Typography>
    );
  }

  // minimum os requirement
  const MinimumRequirement = () => {
    const classes = useStyles();

    return (
      <div className={classes.gapsBottom}>
        <Typography variant='body1'>
          The minimum os requirement is:
        </Typography>
        <ul>
          <li><Typography variant='body1'>All linux distribution no earlier than Ubuntu 16.04</Typography></li>
          <li><Typography variant='body1'>macOS version 10.14+</Typography></li>
          <li><Typography variant='body1'>Windows 10 version 1507+</Typography></li>
        </ul>
        <Typography variant='body1'>
          Python version 3.6+
        </Typography>
      </div>
    );
  };





  const Steps = () => {
    if (steps.length === 0) {
      return ""
    }
    else {
      return (
        <React.Fragment>
          {steps.map((s, idx) => 
            <Typography className={classes.steps} key={idx}>{s}</Typography>
          )}
        </React.Fragment>
      );
    }
  }

  // after copy, a simple toast message using snackbar
  const [isOpen, setIsOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  // copy the current "steps" in the clipboard
  const copyFunc = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const copyToClipboard = async () => {
    const allCommands = steps.join('\n');
    copyFunc(allCommands)
      .then(() => {
        setMsg("Copied to clipboard ✓");
      })
      .catch((e) => {
        setMsg("Oops something wrong. Please copy manually ☹");
      });
    
    setIsOpen(true);
  }
  

  return (
    <div id={id} className={classes.root}>
      <Title />
      <MinimumRequirement/>

      <Typography variant="body1" gutterBottom={true}>Choose from the following:</Typography>
      <OptionTabs label="CUDA" content={cudaArray} value={values[0]} onChange={onChange} idx={0}/>
      <OptionTabs label="OS" content={osArray} value={values[1]} onChange={onChange} idx={1}/>
      <OptionTabs label="Python" content={pythonArray} value={values[2]} onChange={onChange} idx={2}/>

      <Paper
        className={classes.paper}
        elevation={1}
      >
        <Steps/>
        <IconButton
          className={classes.iconButton}
          onClick={copyToClipboard}
        >
          {isOpen ? <AssignmentTurnedInIcon/> : <AssignmentIcon/>}
        </IconButton>
      </Paper>

      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={() => setIsOpen(false)}
        message={msg}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      />
    </div>
  )
};

