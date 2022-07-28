import React from "react";
import MenuList from "./components/MenuList/MenuList";
import Home from "./components/MenuList/Home";
import Modal from "./components/Modal/Modal";
import Layout from "./components/Layout/Layout";




const App = () => {

  return (
    <div className="container">
          <Layout/>
          <Modal/>
          <MenuList/>
          <Home/> 
    </div>
  );
};

export default App;
