import React, {useEffect, useState} from "react";
import useRequestGET from "./useRequest";

const Requests=()=>{

    const [fetchdata, setFetchdata]=useState({});

    // const req=async ()=>{
    //     try{
    //         const result=await fetch("https://swapi.dev/api/films/");
    //         const data=await result.json();
    //         console.log(data);
    //         setFetchdata(data);
    //     } 
    //     catch(e){
    //         console.log(e);
    //     }     
    // }
    // useEffect(()=>{
    //     req();
    // },[]);

    const data=useRequestGET("https://swapi.dev/api/films/");
    //console.log(data);


    return <>
        <div>
            <ul>
                {
                    data?.results?.map((item)=><li>{item.title}</li>)
                }
            </ul>
        </div>
    </>
}

export default Requests;