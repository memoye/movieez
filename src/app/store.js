import { configureStore } from "@reduxjs/toolkit";
import trailerReducer from "../features/trailer/trailerSlice";


export const store = configureStore({
    reducer: {
        trailer: trailerReducer
    }
})



