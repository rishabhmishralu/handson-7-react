import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice(
    {
        name : 'dataSlice',
        initialState : [{ name: 'rishabh',age:22,course:"mern",batch:"sept" },{ name: 'rishabh',age:22,course:"mern",batch:"sept" },{ name: 'rishabh',age:22,course:"mern",batch:"sept" }],
        // reducer function dispatch actions to update your state
        reducers :
        {
            editData : (state,action)=>{
               console.log("Edit : ")
               console.log(action.payload);
                state[action.payload.index] = action.payload.newObj;
                return (state) 
            },
            addData : (state,action)=>{
                state.push(action.payload)
                return (state)
            }    
        }
    }
);

export const {editData,addData} = dataSlice.actions;
export default dataSlice.reducer; 