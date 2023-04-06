import React, { useState } from "react";
import Creden from "./auth-context";

const Form =(props)=>{
     
    const [name, setName]=useState("");
    const [age, setAge]=useState("");
    
    const onClickHandler=()=>{
        //console.log(name,age);

        props.getData([name,age]);
        setName("");
        setAge("");
    }

    return <>
    <Creden.Provider value={{name:name, age:age}}>

        <h3>Form Component</h3>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        <label>Age: </label>
        <input type="text" value={age} onChange={(e)=>setAge(Number(e.target.value))} />
        <br />
        <button onClick={onClickHandler}>Add User</button>
    
    </Creden.Provider>
    </>
}

export default Form;