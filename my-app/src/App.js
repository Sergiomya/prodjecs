import React from "react";
import "./App.css"
import MenuList from "./components/MenuList/MenuList";
import Modal from "./components/Modal/Modal";
import { Routes,Route,Link } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Layout from "./components/Layout/Layout";


const App = () => {

  return (
    <div className="conteiner">
          <MenuList/>
          <Modal/>
    </div>
  );


};

export default App;
