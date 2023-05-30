import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Snackbar,
  Tab,
  Tabs,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Frame from "./Frame";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Divider from "@material-ui/core/Divider";
import { classDeclaration } from "@babel/types";
import Footer from "./Footer";

// function to convert commands into object
const createData = (cuda, os, python, ...steps) => {
  return { cuda, os, python, steps };
};

// put all your installation commands here !!!
const commands = [
  createData("10.1", "Linux", "3.6", "conda install dgsparse"),
  createData("10.1", "Mac", "3.6", "conda install dgsparse"),
  createData("10.1", "Windows", "3.6", "conda install dgsparse"),

  createData("10.1", "Linux", "3.7", "conda install dgsparse"),
  createData("10.1", "Mac", "3.7", "conda install dgsparse"),
  createData("10.1", "Windows", "3.7", "conda install dgsparse"),

  createData("10.2", "Linux", "3.6", "conda install dgsparse"),
  createData("10.2", "Mac", "3.6", "conda install dgsparse"),
  createData("10.2", "Windows", "3.6", "conda install dgsparse"),

  createData("10.2", "Linux", "3.7", "conda install dgsparse"),
  createData("10.2", "Mac", "3.7", "conda install dgsparse"),
  createData("10.2", "Windows", "3.7", "conda install dgsparse"),
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
  title: {
    fontFamily: "Libre Baskerville, serif",
  },
  install: {
    justifyContent: "flex-start",
  },
  tabGrid: {
    paddingBottom: theme.spacing(1),
  },
  col: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
    boxShadow: "2px 5px 5px 2px rgba(0, 0, 0, 0.253)",
    position: "relative", // for thhe icon button to stick to the top right corner
  },
  shortcut: {
    paddingRight: theme.spacing(4),
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  // gapsBottom: {
  //   paddingBottom: theme.spacing(2),
  // },
  iconButton: {
    position: "absolute",
    top: "0",
    right: "0", // the icon button sticks to the top right corner
  },
  steps: {
    width: "90%",
  },
  title: {
    fontFamily: "Rubik, sans-serif",
  },
}));

const OptionTabs = ({ content, label, onChange, value, idx }) => {
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
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Tabs
          onChange={(e, newValue) => onChange(idx, newValue)}
          indicatorColor="primary"
          textColor="info"
          value={value}
        >
          {content.map((c) => {
            return <Tab key={c} label={c} />;
          })}
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default function Installation() {
  const classes = useStyles();
  const title = "Installation";
  const subtitle = "Get started with dgSPARSE";

  // obtain all distinct options
  const cudaArray = [...new Set(commands.map((c) => c.cuda))].sort();
  const osArray = [...new Set(commands.map((c) => c.os))].sort();
  const pythonArray = [...new Set(commands.map((c) => c.python))].sort();

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView();
  };

  const ShortCut = () => {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h5>ShorCuts</h5>
          </ListSubheader>
        }
        className={classes.shortcut}
      >
        <Divider />
        <ListItem button>
          <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Starred" className={classes.nested} />
        </ListItem>
      </List>
    );
  };

  // use values to find the installation steps
  const findSteps = (opts) => {
    const results = commands.filter((obj) => {
      return (
        obj.cuda === cudaArray[opts[0]] &&
        obj.os === osArray[opts[1]] &&
        obj.python === pythonArray[opts[2]]
      );
    });

    // return the array of steps, or empty array
    return results.length === 0 ? [] : results[0].steps;
  };

  // first hook: store the chosen tab values
  const [values, setValues] = React.useState([0, 0, 0]);

  // second hook, store the stpes
  const [steps, setSteps] = React.useState(findSteps(values));

  // when user click on the tab, onChange will update the choices
  const onChange = (idx, newValue) => {
    const newValues = [...values];
    newValues[idx] = newValue;
    setValues(newValues);
    setSteps(findSteps(newValues)); // foce to update with new values immediately.
  };

  const SubTitle = (title) => {
    return (
      <Typography
        className={classes.title}
        variant="h5"
        paragraph={true}
        gutterBottom={true}
      >
        Start Locally
      </Typography>
    );
  };

  // minimum os requirement
  const MinimumRequirement = () => {
    return (
      <Typography variant="body1" classname={classes.install}>
        The minimum system requirement is:
        <ul>
          <li>All linux distribution no earlier than Ubuntu 16.04</li>
          <li>macOS version 10.14+</li>
          <li>Windows 10 version 1507+</li>
          <li>Python version 3.6+</li>
        </ul>
      </Typography>
    );
  };

  const Steps = () => {
    if (steps.length === 0) {
      return "";
    } else {
      return (
        <React.Fragment>
          {steps.map((s, idx) => (
            <Typography className={classes.steps} key={idx}>
              {s}
            </Typography>
          ))}
        </React.Fragment>
      );
    }
  };

  // after copy, a simple toast message using snackbar
  const [isOpen, setIsOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  // copy the current "steps" in the clipboard
  const copyFunc = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const copyToClipboard = async () => {
    const allCommands = steps.join("\n");
    copyFunc(allCommands)
      .then(() => {
        setMsg("Copied to clipboard ✓");
      })
      .catch((e) => {
        setMsg("Oops something wrong. Please copy manually ☹");
      });

    setIsOpen(true);
  };

  // the other components can simply use ref to scroll,
  // only this installation component needs to add the id,
  // so make it easier for the button in the Header to locate the scroll.
  return (
    <Grid>
      <Frame title={title} subtitle={subtitle} />
      <Grid item container direction="row" justifyContent="space-around">
        <Grid item xs={12} md={10} sm={9} className={classes.root}>
          <Row classname={classes.root}>
            <Col xm={false} xs={4} style={{ textAlign: "left" }}>
              <ShortCut />
            </Col>
            <Col xs={8} style={{ textAlign: "left" }} classname={classes.col}>
              <SubTitle />

              <MinimumRequirement />

              <Typography variant="body1">
                Choose from the following:
              </Typography>
              <OptionTabs
                label="CUDA"
                content={cudaArray}
                value={values[0]}
                onChange={onChange}
                idx={0}
              />
              <OptionTabs
                label="OS"
                content={osArray}
                value={values[1]}
                onChange={onChange}
                idx={1}
              />
              <OptionTabs
                label="Python"
                content={pythonArray}
                value={values[2]}
                onChange={onChange}
                idx={2}
              />

              <Paper className={classes.paper} elevation={1}>
                <Steps />
                <IconButton
                  className={classes.iconButton}
                  onClick={copyToClipboard}
                >
                  {isOpen ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
                </IconButton>
              </Paper>

              <Snackbar
                open={isOpen}
                autoHideDuration={2000}
                onClose={() => setIsOpen(false)}
                message={msg}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              />
            </Col>
          </Row>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
