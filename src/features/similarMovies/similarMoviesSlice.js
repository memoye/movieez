import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const initialState = {
    loading: false,
    similarMovies: [],
    totalPages: 0,
    totalResults: 0,
    page: 0,
    error: ''
}

//generate pending , fulfilled and rejected action types
export const fetchSimilar = createAsyncThunk('similarMovies/fetchSimilar', async (id, p) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL + id}/similar`,
        params: { language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_ACCESS_TOKEN
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        })
});


const similarMoviesSlice = createSlice({
    name: 'similarMovies',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchSimilar.pending, state => {
            state.similarMovies = []
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchSimilar.fulfilled, (state, action) => {
            state.loading = false
            state.similarMovies = action.payload.totalResults
            state.page = action.payload.page
            state.totalPages = action.payload.totalPages
            state.totalResults = action.payload.totalResults
        })
        builder.addCase(fetchSimilar.rejected, (state, action) => {
            state.loading = false
            state.similarMovies = []
            state.error = action.error.message
        })
    }
})

export default similarMoviesSlice.reducer