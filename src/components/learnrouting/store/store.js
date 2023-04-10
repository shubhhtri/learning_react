import {createStore} from "redux";

const counterReducer=(state={counter:0, vis:false}, action)=>{
    if(action.type==="inc"){
        return {...state, counter:state.counter+action.amount};
    }
    else if(action.type==="dec"){
        return {...state, counter:state.counter-action.amount};
    }
    else if(action.type==="toggle"){
        return {...state, vis: !state.vis}
    }

    return state;
}

const store=createStore(counterReducer);

export default store;
