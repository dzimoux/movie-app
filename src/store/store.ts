import {configureStore} from "@reduxjs/toolkit";

import {LoadingReducer} from "./slices/LoadingSlice";
import {MoviePagesReducer} from "./slices/Movie/MoviePagesSlice";
import {MovieDetailsReducer} from "./slices/Movie/MovieDetailsSlice";
import {GenreListSliceReducer} from "./slices/Genre/GenreListSlice";
import { MoviesByGenreReducer} from "./slices/Genre/MoviesByGenreSlice";
import {SearchedMoviesReducer} from "./slices/Search/SearchedMoviesSlice";



const store = configureStore({
    reducer:{
        LoadingReducer,
        moviePages: MoviePagesReducer,
        movieDetails: MovieDetailsReducer,
        genresList: GenreListSliceReducer,
        chosenGenreMovies: MoviesByGenreReducer,
        searchedMovies:SearchedMoviesReducer
    }
})


export {
    store
}