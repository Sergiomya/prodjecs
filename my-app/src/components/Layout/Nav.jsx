import React from 'react';
import { Link } from 'react-router-dom';
import "./Layout.css";
import { OPENMODAL } from "../Modal/consts/openModal";
import { CLOSEMODAL } from '../Modal/consts/closeModal';
import Modal from '../Modal/Modal';






const Nav = () => {
    

    return (
        <>
            <ul>
                <li>
                    <Link to='/home'className='menuList' onClick={CLOSEMODAL} >home</Link>
                    <Link to='/' onClick={OPENMODAL}>Need to know</Link>
                    <Link to='/posts' onClick={CLOSEMODAL}>Women</Link>
                    <Link to='/Contacts' onClick={CLOSEMODAL}>Contacts</Link>
                </li>
            </ul>
        </>
 
    );
};

export default Nav;