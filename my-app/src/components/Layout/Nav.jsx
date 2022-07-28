import React from 'react';
import { Link } from 'react-router-dom';
import "./Layout.css";
import { OPENMODAL } from "../Modal/consts/openModal";
import { CLOSEMODAL } from '../Modal/consts/closeModal';
import { Card, CardActionArea, CardMedia} from '@mui/material';
import MenuSearch from '../MenuSearch/MenuSearch';

const Nav = () => {
    

    return (
        <>
          <Card className='CardHeader'
          sx={{
            backgroundColor: "unset",
            boxShadow: "none",
          }}>
          <CardActionArea component={Link} to="/home" onClick={CLOSEMODAL}>
            <CardMedia
              sx={{ minHeight: 90, maxWidth: 90 }}
              component="img"
              image="/image/womenIcons.png"
              alt="women"
            ></CardMedia>
          </CardActionArea>
        </Card>

            <nav>
                 <Link to='/home'className='menuList' onClick={CLOSEMODAL} >home</Link>
                 <MenuSearch/>
                 <Link to='/' onClick={OPENMODAL}>Need to know</Link>
                 <Link to='/posts' onClick={CLOSEMODAL}>Women</Link>
                 <Link to='/Contacts' onClick={CLOSEMODAL}>Contacts</Link>
            </nav>
        </>
 
    );
};

export default Nav;