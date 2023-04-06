import React, {useState} from "react";
import { createPortal } from "react-dom";
import Form from "./Form";
import Lists from "./Lists";
import ErrorModel from "./ErrorModel";
import Useeffect from "./Useeffect";
import Addtocart from "./Addtocart";
import Creden from "./auth-context";
import Loop from "./Loop";
import Counter from "./Counter";
import Requests from "./Requests";

const Main=(props, ref)=>{
    const [data, setData]=useState([
        {
            name:"abc",age:10
        },
        {
            name:"xyz", age:20
        }
    ]);
    
    const getFormData=(d)=>{
        console.log(d);
        setData((prevData)=>{
            return [...prevData, {name: d[0], age: d[1]}];
        })
    }

    const obj={key1:"value1", key2:"value2", key3:"value3", key4:{
        a:"gshk", b:{
            aa:"gsgj", bb:{
                aaa:"hbsubcn", bbb:"dhbcujh"
            }
        }
    }}

    const d=obj.key4.b.bbb?.bbb;
    console.log(d);

    return <>
            <br />
            <br />
            <Requests />
            <Counter />
            <Loop />
            <h1> Checking</h1>
            <Addtocart />
            <Form getData={getFormData} />
            <Lists data={data}/>
            {
                createPortal(<ErrorModel /> , document.getElementById("another-root"))
            }
            {/* <Useeffect /> */}
        
    </>
}

export default Main;