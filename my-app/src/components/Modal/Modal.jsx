import React from "react";
import MenuList from "../MenuList/MenuList";
import {CLOSEMODAL} from "../Modal/consts/closeModal";
import "./Modal.css";


const Modal = () => {


 
  return (
  <div className="modal"> 
    <div className="modalFone" onClick={CLOSEMODAL}></div>
    <div className="modalContent">
      <div className="modalText">Да почему, в конце концов, каждому своему действию я должен придумывать предлог? «Морфий» 
      </div>
    </div>
  </div>
  )
}

export default Modal;