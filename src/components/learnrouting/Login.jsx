import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData]=useState({});

  const [searchParams, setSearchParams]=useSearchParams();
  const isLoged="login"===searchParams.get("mode");

  const onChangeHandler=(e,item)=>{
    setLoginData({...loginData, [item]:e.target.value});
  }

  const onSubmitHandler=()=>{
    console.log(loginData);
  }

  useEffect(()=>{
    onSubmitHandler();
  }, [])

  return (
    <>
        <h2>{isLoged ? "Login" : "Signup"}</h2>
        <input type="text" onChange={(e)=>{onChangeHandler(e,"email")}} />
        <br></br>
        <input type="text" onChange={(e)=>{onChangeHandler(e,"pass")}} />
        <br />
        <Link to={`?mode=${isLoged ? "signup" : "login"}`} >{isLoged ? "Create New User" : "Login"}</Link>
        <button onClick={onSubmitHandler}>Save</button>

    </>
  )
}

export default Login