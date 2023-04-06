import React, { useEffect, useState } from "react";

const Useeffect=()=>{

    const [val, setVal]=useState("");

    useEffect(()=>{
        console.log("EFFACT RAN");

        const indeti=setTimeout(()=>{console.log("from inside the setInterval")}, 500);

        return ()=>{
            console.log("timeout cleared")
            clearTimeout(indeti);
        }
        
    },[val]);

    return <>
        <p> checking</p>
        <input type="text" onChange={(e)=>{setVal(e.target.value)}} />
    </>
}

export default Useeffect;