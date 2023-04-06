import React from 'react';
import logo from "./twitter-logo-24.png";
import "./nav.css";

function Nav() {
  return (
    <div className='nav'>
        <div className='logo'>
            <a href='#'>
                <img src={logo} alt='logo' />
                <p>Comp Name</p>
            </a>
        </div>
        <div className='nav-bar'>
            <ul className='left-nav'>
                <li><a href="#">Opt 1</a></li>
                <li><a href="#">Opt 1</a></li>
                <li><a href="#">Opt 1</a></li>
            </ul>

            <ul className='right-nav'>
                <li><a href="#">Login</a></li>
                <li><a href="#">SignUp</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav