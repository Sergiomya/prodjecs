import React from 'react';
import "./Posts.css";
import MenuList from '../MenuList/MenuList';


const Posts = () => {
    return (
        <div className='posts'>
            <div className='headerPosts'>20 великих женщин</div>
            <div className='posts__content'>
                <div className='posts__icon'></div>
                <div className='posts__text'></div>
            </div>
            <div className='posts__content'>
                <div className='posts__icon'></div>
                <div className='posts__text'></div>
            </div>
            <div className='posts__content'>
                <div className='posts__icon'></div>
                <div className='posts__text'></div>
            </div>
            <div className='posts__content'>
                <div className='posts__icon'></div>
                <div className='posts__text'></div>
            </div>
        </div>

    );
};

export default Posts;