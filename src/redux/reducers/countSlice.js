import { createSlice } from "@reduxjs/toolkit";

const defCount={
    initV:0
}
export const countSlice =createSlice({
    name:'count',
    initialState:defCount,
    reducers:{
        addOne: (state, action) => {
           state.initV+=action.payload
        },
        minusOne:(state,action)=>{
            state.initV-=action.payload;
        }
    }
})

export const {addOne,minusOne}=countSlice.actions;

export default countSlice.reducer

