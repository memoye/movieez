import { configureStore } from "@reduxjs/toolkit";
import trailerReducer from "../features/trailer/trailerSlice";
import similarMoviesReducer from '../features/similarMovies/similarMoviesSlice';


export const store = configureStore({
    reducer: {
        trailer: trailerReducer,
        similarMovies: similarMoviesReducer
    }
})



