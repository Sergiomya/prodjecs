import React from "react";
import { Routes,Route } from "react-router-dom";
import "./MenuList.css";
import Home from "./Home";
import Posts from "../Posts/Posts"
import Contacts from "../Contacts/Contacts";

function MenuList() {


    return (
        <>
        <Routes>
            <Route path="/home" element={<Home/>}>Home</Route>
            <Route path="/" element={<Home/>}>Need to know</Route>
            <Route path="/posts" element={<Posts/>}>Women</Route>
            <Route path="/contacts" element={<Contacts/>}>Contacts</Route>
        </Routes>
        </>
    );


}

export default MenuList;