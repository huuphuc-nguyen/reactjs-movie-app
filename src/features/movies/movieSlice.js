import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (searchKey) => {

        searchKey = (!searchKey || searchKey.length === 0) ? 'Harry' : searchKey;

        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${searchKey}&type=movie`);
  
       return response.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (searchKey) => {
       // const searchKey = 'Friends';

       searchKey = (!searchKey || searchKey.length === 0) ? 'Friends' : searchKey;

        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${searchKey}&type=series`);
  
       return response.data;
    }
)

export const fetchAsyncDetail = createAsyncThunk(
    "movies/fetchAsyncDetail",
    async (id) => {

        const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&plot=full`);
  
       return response.data;
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice ({
    name: 'movies',
    initialState,
    reducers:{
        removeSelectedItem: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Fetch finished');
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Fetch movies failed');
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('Fetch shows finished');
            return {...state, shows: payload};
        },
        [fetchAsyncDetail.fulfilled]: (state, {payload}) => {
            console.log('Fetch detail finished');
            return {...state, selectedMovieOrShow: payload};
        },
    }
});

export const {removeSelectedItem} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetail = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
