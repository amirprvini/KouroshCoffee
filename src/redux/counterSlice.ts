import { createSlice } from "@reduxjs/toolkit";


export interface counterState {
    value: number
}

const initialState : counterState = {
    value : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers : {
    increment : (state) => {
        state.value += 1 ; 
    },
    decrement : (state)=>{
        state.value -= 1 ;
    }
  }
})

// Action creators are generated for each case reducer function
export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer