import React from "react";
import { Routes,Route } from "react-router-dom";
import "./MenuList.css";
import Modal from "../Modal/Modal";
import Posts from "../Posts/Posts";
import Home from "./Home";
import Layout from "../Layout/Layout";



function MenuList() {

    return (
        <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="posts" element={<Posts/>}/> 
                <Route insex element={<Home/>}/>
            </Route>
        </Routes>
        </>
    );


}

export default MenuList;