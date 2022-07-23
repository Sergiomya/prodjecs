import React from "react";
import {CLOSEMODAL} from "../Modal/consts/closeModal";
import "./Modal.css";



const Modal = () => {


 
  return (
  <div className="modal"> 
    <div className="modalFone" onClick={CLOSEMODAL}></div>
    <div className="modalContent">
      <div className="modalText">Да почему, в конце концов, каждому своему действию я должен придумывать предлог? «Морфий» Булгаков М.А.
      </div>
    </div>
    
  </div>
  )
}

export default Modal;