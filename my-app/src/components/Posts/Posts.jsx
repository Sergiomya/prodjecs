import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import {posts} from '../consts/Posts';
import "./Posts.css";



const Posts = () => {
  return (
   <Grid conteiner className='posts'>
     {posts.map(post =>
        <Grid>
          <Card key={post.id}>
            <Typography>{post.title}</Typography>
            <img className='card' key={post.id} src={post.Image}/>
          </Card>
        </Grid>)}
   </Grid>
  );
};

export default Posts;