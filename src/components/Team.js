import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(4),
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
  },
  title: {
    fontFamily: 'Rubik, sans-serif',
  },
}));

// convert data into object. 
// some href may be undefined
const createData = (name, uni, refer) => {
  return {name, uni, refer};
}

// edit the data here !!!
// some members does not have the href, can simply add the github profile page.
// so for now, some href is undefined
const data = [
  createData('Guohao Dai', 'Shanghai Jiao Tong University', 'https://nicsefc.ee.tsinghua.edu.cn/people/guohao-dai/'),
  createData('Zhongming Yu', 'University of California, San Diego', 'https://fishmingyu.github.io/'),
  createData('Guyue Huang', 'University of California, Santa Barbara', 'https://hgyhungry.github.io/'),
  createData('Hengrui Zhang', 'Princeton University'),
  createData('Tianyu Fu', 'Tsinghua University', 'http://nicsefc.ee.tsinghua.edu.cn/people/TianyuFu'),
  createData('Genghan Zhang', 'Tsinghua University', 'https://zhang677.github.io/'),
  createData('Shang Yang', 'Tsinghua University'),
  createData('Jiaming Xu', 'Shanghai Jiao Tong University', 'https://mathscode.github.io/'),
  createData('Tianqi Wu', 'Tsinghua University'),
  createData('Yibing Zhang', 'Tsinghua University'),
  createData('Jishen Zhao', 'University of California, San Diego', 'https://cseweb.ucsd.edu/~jzhao/'),
  createData('Yu Wang', 'Tsinghua University', 'http://nicsefc.ee.tsinghua.edu.cn/people/YuWang'),
];


export default function Team({innerRef}) {
  const classes = useStyles();

  const Person = ({name, uni, refer}) => {
    if (typeof refer === 'undefined') {
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
          <Link variant="body1" className={classes.listTypography} href={refer}>
            {`${name} (${uni})`}
          </Link>
        </li>
      );
    }
  }

  return (
    <div ref={innerRef} className={classes.root}>
      <Typography
        variant="h3"
        display="block"
        gutterBottom={true}
        className={classes.title}
      >
        Our Team
      </Typography>
      <ul>
        {data.map((member) => 
          <Person key={member.name} {...member}/>
        )}
      </ul>
    </div>
  )
}