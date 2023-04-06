import React, { useEffect, useState } from "react";

const Counter=()=>{
    const [inc, setInc]=useState(0);
    const [dec, setDec]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setInc((i)=>i+1);
            setDec((i)=>i-1);
        }, 1000)

        return ()=>clearInterval(interval);
    },[]);
    

    return <>
        <div>
            <div>{inc}</div>
            <div>{dec}</div>
        </div>
    </>
}

export default Counter;