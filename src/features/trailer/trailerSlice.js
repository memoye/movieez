import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const initialState = {
    loading: false,
    trailers: [],
    error: '',

    trailerOpen: false,
    trailerId: '',
    randomClipOpen: '',
    randomClipId: ''
}

//generate pending , fulfilled and rejected action types
export const fetchVids = createAsyncThunk('trailer/fetchVids', async (id) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL + id}/videos`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: import.meta.env.VITE_ACCESS_TOKEN
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        throw error; // Rethrow the error so that it can be caught in fetchVids.rejected
    }
});


const trailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        openTrailer: (state, action) => {
            state.trailerOpen = true
        },
        openRandomClip: (state, action) => {
            state.randomClipOpen = true
        },
        closeModal: (state) => {
            state.randomClipOpen = false
            state.trailerOpen = false
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchVids.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchVids.fulfilled, (state, action) => {
            state.loading = false
            state.trailerId = action.payload.filter(vid => vid.type === 'Trailer')[0].key
            state.trailers = action.payload
            state.randomClipId = action.payload.filter(vid => vid.type !== 'Trailer')[Math.floor(Math.random() * action.payload.length)].key
            state.error = ''
        })
        builder.addCase(fetchVids.rejected, (state, action) => {
            state.loading = false
            state.trailers = []
            state.error = action.error.message
        })
    },

})

export const { openTrailer, openRandomClip, closeModal } = trailerSlice.actions

export default trailerSlice.reducer