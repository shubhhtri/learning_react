import { useState, useEffect } from "react";

const useRequestGET=(url)=>{
    const [fetchdata, setFetchdata]=useState({});

    const req=async ()=>{
        try{
            const result=await fetch(url);
            const data=await result.json();
            //console.log(data);
            setFetchdata(data);
        } 
        catch(e){
            console.log(e);
        }     
    }
    useEffect(()=>{
        req();
    },[]);

    return fetchdata;
}

export default useRequestGET;