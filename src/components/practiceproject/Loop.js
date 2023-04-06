import React, { useEffect, useRef, useState, forwardRef } from "react";

const Loop=()=>{
    const [val, setVal] = useState("");
    //const [count, setCount]= useState(0);
    const count=useRef(0);    // count={current: 0}
    useEffect(()=>{
        //setCount((prev)=>prev+1);
        count.current=count.current+1;
    });

    const inputRef=useRef();

    const focus=()=>{
        //console.log(inputRef.current);    //Points to the input element
        inputRef.current.focus();
        //inputRef.current.value=1000;
        //inputRef.current.style.backgroundColor="red";
    }

    return <>
        <p>Looping ----- {val}</p>
        <input type="text" ref={inputRef} onChange={(e)=>{setVal(e.target.value)}} value={val} />

        <p>Rendered--- {count.current} times</p>

        <button onClick={focus}>Focus</button>

    </>
}

export default Loop;