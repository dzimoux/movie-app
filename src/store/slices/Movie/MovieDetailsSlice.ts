import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios/index";

import {MovieDetailsInterface} from "../../../interfaces/Movie/MovieDetailsInterface";
import {movieService} from "../../../configs/movieService";



export interface MovieDetailsStateInterface {
    movieDetails: MovieDetailsInterface | null;
    loading: boolean;
    error: string | null;
}

const initialState: MovieDetailsStateInterface = {
    movieDetails: null,
    loading: false,
    error: null
};

const getMovieDetails = createAsyncThunk<MovieDetailsInterface, number>(
    'MovieDetailsSlice/getMovieDetails',
    async (id,{rejectWithValue})=>{
try{
    const {data} = await movieService.getMoviebById(id)
    return data
}catch (e) {
    // @ts-ignore
    if (e.response) {
        const err = e as AxiosError;
        // @ts-ignore
        return rejectWithValue(err.response.data);
    } else {
        // @ts-ignore
        return rejectWithValue(e.message);
    }
}
    }
)

const MovieDetailsSlice = createSlice({
    name:'MovieDetailsSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder
            .addCase(getMovieDetails.fulfilled,(state, action)=>{
                state.movieDetails = action.payload
            })
            .addCase(getMovieDetails.pending,(state, action)=>{

            } )
    }
})

const {reducer:MovieDetailsReducer, actions} = MovieDetailsSlice;

const MovieDetailsActions = {
    ...actions,
    getMovieDetails
}

export {
    MovieDetailsActions,
    MovieDetailsReducer
}