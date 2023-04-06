import React, {useContext} from "react";
import Creden from "./auth-context";

const Lists=({data})=>{
    //console.log(data);

    const context_data=useContext(Creden);
    console.log(context_data);


    return <>
        <h5>List of Users</h5>
        <ul>
            {
                data.map((d)=><li>Name: {d.name} , Age: {d.age}</li>)
            }
        </ul>
    </>
}

export default Lists;