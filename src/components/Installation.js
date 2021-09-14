import { Grid, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react'


// function to convert commands into object
const createData = (cuda, os, python, ...steps) => {
  return {cuda, os, python, steps}
}

// put all your installation commands here !!!
const commands = [
  createData('10.1', 'Linux', '3.6', 'conda install -c dgsparse 10.1 linux 3.6'),
  createData('10.1', 'Mac', '3.6', 'conda -install -c dgsparse 10.1 mac 3.6'),
  createData('10.1', 'Windows', '3.6', 'conda -install -c dgsparse 10.1 windows 3.6'),

  createData('10.1', 'Linux', '3.7', 'conda install -c dgsparse 10.1 linux 3.7'),
  createData('10.1', 'Mac', '3.7', 'conda -install -c dgsparse 10.1 mac 3.7'),
  createData('10.1', 'Windows', '3.7', 'conda -install -c dgsparse 10.1 windows 3.7'),
];


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  tabs: {
    display: 'inline-block',
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  }
}));


// title
const Title = () => {
  return (
    <Typography
      variant="h3"
      display="block"
      gutterBottom={true}
    >
      Installation
    </Typography>
  );
}

// minimum os requirement
const MinimumRequirement = () => {
  return (
    <div>
      <Typography variant='h5' gutterBottom={true}>
        System Requirement
      </Typography>
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

const OptionTabs = ({content, label, onChange, value, idx}) => {
  // const classes = useStyles();

  return (
    <div
    >
      <Typography variant="body1">{label}</Typography>
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
    </div>
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

  const Steps = () => {
    if (steps.length === 0) {
      return ""
    }
    else {
      return (
        <React.Fragment>
          {steps.map((s) => 
            <Typography key={s}>{s}</Typography>
          )}
        </React.Fragment>
      );
    }
  }


  return (
    <div id={id} className={classes.root}>
      <Title />
      <MinimumRequirement/>
      <OptionTabs label="CUDA" content={cudaArray} value={values[0]} onChange={onChange} idx={0}/>
      <OptionTabs label="OS" content={osArray} value={values[1]} onChange={onChange} idx={1}/>
      <OptionTabs label="Python" content={pythonArray} value={values[2]} onChange={onChange} idx={2}/>
      <Paper
        className={classes.paper}
        elevation={1}
      >
        <Steps/>
      </Paper>
    </div>
  )
}
