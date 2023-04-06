import React, { useState } from 'react'

function InputArea() {

    const [val, setVal]=useState("");
    const [isval, setIsval]=useState(false);
    const [istouched, setIstouched]= useState(false);

    const submitHandler=()=>{
        setIstouched(true);
        if(val.trim()===""){
            setIsval(false);
            return;
        }
        
        const value=val;
        setVal("");

        setIsval(true);
        console.log(value);

    }

    const blurHandler=()=>{
        setIstouched(true);
        if(val.trim()===""){
            setIsval(false);
            return;
        }
    }

  return (
    <>
        <div>
            <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
            <p>{ !isval && istouched ? "Name must not be empty" : ""}</p>
            <button onClick={submitHandler} onBlur={blurHandler} >Submit</button>
        </div>
    </>
  )
}

export default InputArea;