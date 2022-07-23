import React from "react";
import { Routes,Route } from "react-router-dom";
import "./MenuList.css";
import Posts from "../Posts/Posts";
import Home from "./Home";
import Layout from "../Layout/Layout";



function MenuList() {

    return (
        <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="posts" element={<Posts/>}/> 
                <Route path="/home" element={<Home/>}/>
            </Route>
        </Routes>
        </>
    );


}

export default MenuList;