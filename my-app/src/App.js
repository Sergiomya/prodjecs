import React from "react";
import MenuList from "./components/MenuList/MenuList";
import Home from "./components/MenuList/Home";
import Modal from "./components/Modal/Modal";
import Layout from "./components/Layout/Layout";
import Nav from "./components/Layout/Nav";



const App = () => {

  return (
    <div className="container">
          <Layout/>
          <MenuList/>
          <Home/> 
          <Modal/>
    </div>
  );
};

export default App;
