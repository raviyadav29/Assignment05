import React from 'react'
import "./Header.css"
import Home from './Home'

const Header = () => {
    return (
        <div className='menu'>
            <div id='lefttitle'>
                Logo
            </div>
            <div id='righttitle'>
                <a href='/home'>Home</a>
                <a href=''>About</a>
                <a href=''>Menu</a>
                <a href=''>Product</a>
                <a href=''>Contact</a>
            </div>
        </div>
    )
}

export default Header