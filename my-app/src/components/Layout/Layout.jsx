import React from 'react';
import { NavLink,Outlet } from "react-router-dom";
import { OPENMODAL } from "../Modal/consts/openModal";
import Modal from '../Modal/Modal';
import "../Modal/Modal.css";
import { AppBar, Toolbar} from '@mui/material';
import {CLOSEMODAL} from "../Modal/consts/closeModal";

const Layout = () => {

    const Search = (styled) => {

    };

    const SearchIcon =() => {

    };

    const StyledInputBase=() => {

    };

    return (
        <>
          <Modal/>
        <AppBar sx={{
            display: 'flex', backgroundColor: 'transparent', position: 'fixed'
        }}>
            <Toolbar>
                <NavLink className="menuList" to="/home">Home</NavLink>
                <NavLink to="/" onClick={OPENMODAL}>Need to know</NavLink>
                <NavLink to="/posts" onClick={CLOSEMODAL} >Women</NavLink>
                <NavLink to="/" onClick={CLOSEMODAL} >Contacts</NavLink>
            </Toolbar>

            <Search>
                <SearchIcon></SearchIcon>
                <StyledInputBase
                placeholder='пиши'
                ></StyledInputBase>
            </Search>
        </AppBar>
      
        <Outlet/>
        </>
    );
};

export default Layout;