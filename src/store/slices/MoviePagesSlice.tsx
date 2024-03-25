import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {MoviesResponseInterface} from "../../interfaces/MoviesResponseInterface";
import {AxiosError, AxiosResponse} from "axios";
import {movieService} from "../../services/movieService";

interface IState {
    movies: MoviesResponseInterface
}

const initialState: IState = {
    movies: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }
};

const getMoviePages = createAsyncThunk<MoviesResponseInterface, number>(
    'MoviePagesSlice/getMoviePages',
    async (page, { rejectWithValue }) => {
        try {
            const {data} = await movieService.getMoviesPages(page);
            return data
        } catch (e) {
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
);


const MoviePagesSlice = createSlice({
    name:'MoviePagesSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getMoviePages.fulfilled, (state, action) => {
                state.movies = action.payload
            })
})

const {reducer:MoviePagesReducer,actions} = MoviePagesSlice

const MoviePagesActions = {
...actions,
    getMoviePages

}

export {
    MoviePagesReducer,
    MoviePagesActions
}