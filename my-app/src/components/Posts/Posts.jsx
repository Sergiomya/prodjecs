import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import {posts} from './consts/Posts';
import "./Posts.css";



const Posts = () => {
  return (
   <Grid conteiner className='posts'>
     {posts.map(post =>
        <Grid item key={post.id}>
          <Card >
              <img className='card' key={post.id} src={post.Image}/>
              <Typography>{post.header}</Typography>
              <Typography>{post.title}</Typography>
          </Card>
        </Grid>)}
   </Grid>
  );
};

export default Posts;