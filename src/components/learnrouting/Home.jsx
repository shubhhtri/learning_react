import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate= useNavigate();

  return (
    <>
        <div>Home</div>
        <button onClick={()=>navigate("/products", {replace:true})} >Go to products</button>
    </>
  )
}

export default Home