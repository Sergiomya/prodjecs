import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { IMG_POSTS_ACEDORA_DYNKAN, IMG_POSTS_EKATERINA_II, IMG_POSTS_HEADER, IMG_POSTS_KLEOPATRA, IMG_POSTS_MARIIA_SKLADOVSKAIA_KYRI, IMG_POSTS_SAFO, IMG_POSTS_ZHANNA_DARK, IMG_POSTS_COCO_CHANEL, IMG_POSTS_SOFIYA_KOVALEVSKAYA } from '../consts/images';
import "./Posts.css";


const Posts = () => {
  return (
    <Grid >
      <Grid  container ml={10} alignItems="stretch" py={11}>
        <Card
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <CardMedia
            sx={{
              minHeight: 200,
              maxWidth: 200,
            }}
            component="img"
            height="200"
            image={IMG_POSTS_HEADER}
            alt="women"
          ></CardMedia>
          <Typography
            fontFamily={"Exo 2"}
            textAlign={"center"}
            className="contenHeaderText"
            variant="h3"
          >
            8 великих женщин, с которых следует брать пример
            <Typography>
              Чтобы рассказать вам про всех великих женщин за историю
              человечества, нам бы не хватило и жизни, но вот на кого вам точно
              следует обратить внимание. Григор Григорян
            </Typography>
          </Typography>
        </Card>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={16}
        direction="row"
        fontFamily={"Exo 2"}
        textAlign={"center"}
        justifyContent="center"
        alignItems="stretch"
        mx={20}
      >
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_SAFO}
              alt="Сафо"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Сафо
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Несмотря на то что большинство работ древнегреческой поэтессы
              безвозвратно утеряны, даже тех обрывков, которые до нас дошли,
              хватает, чтобы понять размах ее таланта. Девушка жила на острове
              Лесбос, пела оды любви женскому полу и стала одной из
              основательниц европейской литературы. К тому же вы теперь знаете,
              откуда взялось расхожее слово «лесбиянка».{" "}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_KLEOPATRA}
              alt="Клеопатра"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Клеопатра
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Последняя царица Египта, о которой, кажется, уже сняли столько
              фильмов, сколько не снимали ни об одной женщине в истории. Прожила
              Клеопатра всего около 38 лет, но о ее деяниях ходят легенды
              (особенно о романах с Марком Антонием и Юлием Цезарем). После
              поражения, которое понесли ее войска в битве с римлянами, царица,
              не желая сдаваться в плен, покончила с собой, дабы сохранить свою
              честь.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_ZHANNA_DARK}
              alt="Жанна д’Арк"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Жанна д’Арк
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Много ли вы знаете женщин, командующих войсками? Жанна д’Арк
              повела армию в битву, чтобы спасти свой народ, и умерла достойно,
              не предав своих идеалов. Такой выдержке стоит поучиться каждому
              мужчине.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_EKATERINA_II}
              alt="Екатерина II"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Екатерина II
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Вы знаете, когда именно Крым стал нашим? Совсем не при Путине, а
              еще при Екатерине II, которая к тому же успешно одерживала победы
              в войнах, переписывалась с французскими философами, обожала кофе и
              частенько меняла любовников. Кажется, императрица знала о жизни
              что-то, о чем мы даже не подозреваем.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_ACEDORA_DYNKAN}
              alt="Айседора Дункан"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Айседора Дункан
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Создательница современного танца, которая с ног на голову
              перевернула весь мир западного искусства. Читала Ницше, жила с
              Сергеем Есениным и стремилась создать «нового человека». В
              каком-то смысле ей это удалось.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_MARIIA_SKLADOVSKAIA_KYRI}
              alt="Мария Склодовская-Кюри"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Мария Склодовская-Кюри
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Мария не только первая женщина, получившая Нобелевскую премию, но
              и первый человек, получивший ее дважды (подумайте только:
              дважды!). Вспомните это имя в следующий раз, когда будете
              жаловаться, что не можете продвинуться по карьерной лестнице.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_COCO_CHANEL}
              alt="Коко Шанель"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Коко Шанель
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Модернизировала женскую моду, одевала самых известных женщин своей
              эпохи и разрушала гендерные стереотипы. Популярные духи по
              сравнению с этим – просто мелочь.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ minHeight: 627, maxWidth: 350 }}>
            <CardMedia
              component="img"
              height="350"
              image={IMG_POSTS_SOFIYA_KOVALEVSKAYA}
              alt="Софья Ковалевская"
            />
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              component="div"
            >
              Софья Ковалевская
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Первая в мире женщина – профессор математики, и это в то время,
              когда в России девушкам было запрещено учиться в университетах.
              Чтобы выбраться за границу и продолжить учебу, Софья организовала
              себе фиктивный брак. Это называется целеустремленность.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Posts;