import React, { useReducer} from "react";

const initialval={val1: 0, val2: 10};

const reducer=(state, action)=>{
    switch(action){
        case "increase":
            return {...state, val1: state.val1+1};
        
        case "decrease":
            return {...state, val1: state.val1-1};

        case "reset":
            return initialval;

        case "decrease2" :
            return {...state, val2: state.val2-10};

        case "increase2":
            return {...state, val2: state.val2+10};

        default :
            return state;
    }
}

const Addtocart=()=>{
    //const [val, setVal]=useState(0);

    const [val, dispatch]=useReducer(reducer , initialval);

    return <>
        <h4>Counter</h4>
        <div>
            <button onClick={()=>{dispatch("increase")}}>Increase</button>
            <div> {val.val1} </div>
            <div>{val.val2}</div>
            <button onClick={()=>{dispatch("decrease")}} >Decrease</button>
            <button onClick={()=>{dispatch("reset")}}>Reset</button>
            <button onClick={()=>{dispatch("increase2")}} >Inc2</button>
            <button onClick={()=>{dispatch("decrease2")}} >Dec2</button>
        </div>
    </>
}

export default Addtocart;