import React from "react";
import MenuList from "./components/MenuList/MenuList";
import Home from "./components/MenuList/Home";
import Modal from "./components/Modal/Modal";



const App = () => {

  return (
    <div className="container">
          <Home/> 
          <Modal/>
          <MenuList/>
    </div>
  );
};

export default App;
