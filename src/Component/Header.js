import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <>
        <div className='header__outer'>
            <div className='container'>
                <div className='header__wrap'>
                    <div className='header__left'>
                        <h1>Kaur's React Website</h1>
                    </div>
                    <div className='header__right'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header