import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { posts } from "./consts/Posts";
import "./Posts.css";

const Posts = () => {
  return (
    <Grid container
    justifyContent="center"
    alignItems="center"
    columns={1}>
      <Grid item ml={10} py={13}>
        <Typography
          className="contenHeaderText"
          variant="h3"
          mx={15}
          mt={10}
          sx={{ maxHeight: 472, maxWidth: 1150 }}
          textAlign="justify"
        >
          8 великих женщин, с которых следует брать пример
          <Typography>
            Красивая женщина — это профессия. И если она до сих пор не устроена,
            — ее осуждают. И каждая версия имеет своих безусловных сторонников.
            Ей, с самого детства вскормленной не баснями, остаться одною а,
            значит, бессильною, намного страшнее, намного опаснее, чем если б
            она не считалась красивою. Пусть вдоволь листают романы прошедшие,
            пусть бредят дурнушки заезжими принцами. А в редкой профессии
            сказочной женщины есть навыки, тайны, и строгие принципы. Идет она
            молча по улице трепетной, сидит как на троне с друзьями заклятыми.
            Приходится жить — ежедневно расстрелянной намеками, слухами,
            вздохами, взглядами. Подругам она улыбается весело. Подруги ответят
            и тут же обидятся… Красивая женщина — это профессия, А все остальное
            — сплошное любительство! Роберт Рождественский
          </Typography>
        </Typography>
      </Grid>

      <Grid
        className="posts"
     
      >
        {posts.map((post) => (
          <Grid item xs={5} key={post.id}>
            <Card sx={{ minHeight: 680, maxWidth: 450 }}>
              <CardActionArea>
                <CardMedia key={post.id} component="img" src={post.Image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.header}
                  </Typography>
                  <Typography textAlign="justify" variant="body2">
                    {post.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Posts;
