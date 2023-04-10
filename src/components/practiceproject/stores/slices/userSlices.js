import { createSlice } from "@reduxjs/toolkit";

const userslices=createSlice({
    name:"users",
    initialState:[{name:"abc", age:23}, {name:"xyz", age:45}],
    reducers:{
        adduser(state, action){} ,
        deleteUser(state, action){}
    }
});

export default userslices;
