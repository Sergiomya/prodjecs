import React from 'react';
import { Link } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';
// import {CLOSEMODAL} from "../Modal/consts/closeModal";
// import { OPENMODAL } from "../Modal/consts/openModal";
import "./Layout.css";
import { navItems } from './navItems';


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    {navItems.map((item) => (
                    <Link to="/" key={item.id}>{item.title}</Link>
                    ))}
                </li>
            </ul>
        </nav>
      

    );
};

export default Nav;