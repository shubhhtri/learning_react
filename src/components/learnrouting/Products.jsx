import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Products() {
    const navigate=useNavigate();

    const dispatch=useDispatch();
    const counter=useSelector(state=>state.counter);
    const counterVisi=useSelector(state=>state.vis);

  return (
    <>
        <h1>Products</h1>

        <h3>Counter</h3>
        <button onClick={()=>dispatch({type:"inc", amount:1})}>Increase</button>
        <button onClick={()=>dispatch({type:"inc", amount:10})}>Increase by 10</button>
        { counterVisi ? <p>{counter}</p> : ""}
        <button onClick={()=>dispatch({type:"dec", amount: 1})}>Decrease</button>
        <button onClick={()=>dispatch({type:"dec", amount: 10})}>Decrease by 10</button>
        <button onClick={()=>dispatch({type:"toggle"})}>Toggle</button>
        
        <br></br>
        <br></br>
        <br></br>

        <Link to="new-products">New Products</Link>
        <Link to="old-products">Old Products</Link>
        <Outlet />
        <button onClick={()=>{navigate(-1)}} >Back</button>
    </>
  )
}

export default Products;