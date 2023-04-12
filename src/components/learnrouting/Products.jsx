import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './store/store';

function Products() {
    const navigate=useNavigate();

    const dispatch=useDispatch();
    const counter=useSelector(state=>state.counter.counter);
    const counterVisi=useSelector(state=>state.counter.vis);

  return (
    <>
        <h1>Products</h1>

        <h3>Counter</h3>
        <button onClick={()=>dispatch(counterActions.increase(1))}>Increase</button>
        <button onClick={()=>dispatch(counterActions.increase(10))}>Increase by 10</button>
        { counterVisi ? <p>{counter}</p> : ""}
        <button onClick={()=>dispatch(counterActions.decrease(1))}>Decrease</button>
        <button onClick={()=>dispatch(counterActions.decrease(10))}>Decrease by 10</button>
        <button onClick={()=>dispatch(counterActions.toggle())}>Toggle</button>
        
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