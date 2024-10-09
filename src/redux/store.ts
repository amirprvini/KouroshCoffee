import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./counterSlice";


export const store  = configureStore({
    reducer : {
        counter : counterSlice.reducer 
    },
})

export const useAppDispatch : ()=> typeof store.dispatch=useDispatch ;
export const useApplicationSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector ;