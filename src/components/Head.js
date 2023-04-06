//passing states up

import { useState } from "react";

const Head=(props)=>{

    const [val, setVal]=useState("");
    const onClickHandler=()=>{
        props.onSearch(val);
        setVal("");
    }
    
    return <div className="header">
        <h1>Heading</h1>

        <div className="search-box">
            <label>Search</label>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)}></input>
            <button onClick={onClickHandler}>Search</button>
        </div>
    </ div>
}

export default Head;