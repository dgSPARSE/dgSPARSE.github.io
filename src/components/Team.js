import { Button, IconButton, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  hover: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    }
  },
  listTypography: {
    paddingLeft: theme.spacing(1),
  }
}));

// convert data into object. 
// some href may be undefined
const createData = (name, uni, href) => {
  return {name, uni, href};
}

// edit the data here !!!
// some members does not have the href, can simply add the github profile page.
// so for now, some href is undefined
const data = [
  createData('Guohao Dai', 'Tsinghua University', 'https://nicsefc.ee.tsinghua.edu.cn/people/guohao-dai/'),
  createData('Guyue Huang', 'University of California, Santa Barbara', 'https://hgyhungry.github.io/'),
  createData('Zhongming Yu', 'Tsinghua University', 'https://fishmingyu.github.io/'),
  createData('Hengrui Zhang', 'Tsinghua University'),
  createData('Shang Yang', 'Tsinghua University'),
  createData('Jiajie Li', 'Tsinghua University', 'https://tonyjie.github.io/'),
  createData('Yu Wang', 'Tsinghua University'),
];


export default function Team({id}) {
  const classes = useStyles();

  const Person = ({name, uni, href}) => {
    if (typeof href === 'undefined') {
      return (
        <li>
          <Typography variant="body1" className={classes.listTypography}>
            {`${name} (${uni})`}
          </Typography>
        </li>
      );
    }
    else {
      return (
        <li className={classes.hover}>
          <Typography variant="body1" className={classes.listTypography}>
            {`${name} (${uni})`}
          </Typography>
        </li>
      );
    }
  }

  return (
    <div id={id} className={classes.root}>
      <Typography
        variant="h3"
        display="block"
        gutterBottom={true}
      >
        Our Team
      </Typography>
      <ul>
        {data.map((member) => 
          <Person {...member}/>
        )}
      </ul>
    </div>
  )
}