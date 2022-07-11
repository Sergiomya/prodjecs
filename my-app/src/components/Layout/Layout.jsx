import React from 'react';
import { NavLink,Outlet } from "react-router-dom";
import { OPENMODAL } from "../Modal/consts/openModal";
import Modal from '../Modal/Modal';
import "../MenuList/MenuList.css";

const Layout = () => {
    return (
        <>
        <Modal/>
        <header>
            <NavLink className="menuList" to="/">Home</NavLink>
            <NavLink to="/" onClick={OPENMODAL}>About me</NavLink>
            <NavLink to="/posts">Women</NavLink>
            <NavLink to="/">Contacts</NavLink>
        </header>

        <Outlet/>
        </>
    );
};

export default Layout;