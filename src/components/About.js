import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Image from '../img/dgsparse.png';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(6),
  },
  img: {
    display: 'block',
    margin: 'auto',
    width: '90%',
    objectFit: 'contain',
    paddingTop: theme.spacing(1),
  },
  title: {
    fontFamily: 'Rubik, sans-serif',
  },
  citation: {
    color: grey[600],
    paddingTop: theme.spacing(1),
  }
}));

export default function About({innerRef}) {
  const classes = useStyles();

  return (
    <div  
      ref={innerRef}
      className={classes.root}
    >
      <Typography
        className={classes.title}
        variant="h3"
        display="block"
        gutterBottom={true}
      >
        About
      </Typography>
      <Typography
        variant="body1"
        paragraph={true}
        component="p"
      >
        The dgSPARSE (Deep Graph Sparse) project provides capability of sparse kernel acceleration on GPUs. <br/>
        Currently dgSPARSE provides dgSPARSE Wrapper and dgSPARSE Library.
      </Typography>
      <img className={classes.img} alt="dg sparse" src={Image}/>
      <Link
        href="https://nicsefc.ee.tsinghua.edu.cn/media/publications/2020/SC20_320.pdf"
        variant='caption'
        className={classes.citation}
      >
        © Guyue Huang, Guohao Dai, et al. "GE-SpMM: General-purpose Sparse Matrix-Matrix Multiplication on GPUs for Graph Neural Networks", in SC 2020.
      </Link>
      <br/>
      <Link
        variant='caption'
        className={classes.citation}
        href="https://arxiv.org/abs/2103.00959"
      >
        © Yukuo Cen, Zhenyu Hou, et al. "CogDL: An Extensive Toolkit for Deep Learning on Graphs", in arXiv. Link.
      </Link>
    </div>
  )
}
