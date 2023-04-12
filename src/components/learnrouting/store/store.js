import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0, vis:false},
    reducers:{
        increase(state, action){
            state.counter+=action.payload;
        },
        decrease(state, action){
            state.counter-=action.payload;
        },
        toggle(state){
            state.vis=!state.vis;
        }
    }
})

const authSlice=createSlice({
    name:"auth",
    initialState: {isLoged: false},
    reducers:{
        login(state){
            state.isLoged=true;
        },

        logout(state){
            state.isLoged= false; 
        }
    }
})

const store=configureStore({reducer:{
    counter:counterSlice.reducer,
    auth:authSlice.reducer
}});

export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;
