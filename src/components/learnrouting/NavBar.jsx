import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/products" >Products</NavLink>
        <NavLink to="/users" >Users</NavLink>
        <NavLink to="/auth?mode=login" >Login</NavLink>
    </>
  )
}

export default NavBar