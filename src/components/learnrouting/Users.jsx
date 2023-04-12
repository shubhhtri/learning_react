import React from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/store';

function Users() {

  const dispatch=useDispatch();
  const isAuth=useSelector(state=>state.auth.isLoged);

  return (
    <>
    <div>Users</div>
    {isAuth ? <h3>User Loged In</h3> : <p>No User Loged in</p>}
    <button onClick={()=>dispatch(authActions.login())} >Login</button>
    <button onClick={()=>dispatch(authActions.logout())}>Logout</button>

    <Outlet />
    </>
  )
}

export default Users