import {configureStore} from "@reduxjs/toolkit";
import {LoadingReducer} from "./slices/LoadingSlice";
import {MoviePagesReducer} from "./slices/Movie/MoviePagesSlice";
import {MovieDetailsReducer} from "./slices/Movie/MovieDetailsSlice";
import {GenreListSliceReducer} from "./slices/Genre/GenreListSlice";
import {MovieByGenreReducer} from "./slices/Genre/MovieByGenreSlice";

// import {SearchedMoviesReducer} from "./slices/Search/SearchedMoviesSlice";


const store = configureStore({
    reducer:{
        LoadingReducer,
        moviePages: MoviePagesReducer,
        movieDetails: MovieDetailsReducer,
        genresList: GenreListSliceReducer,
        chosenGenreMovie: MovieByGenreReducer,
        // searchedMovies:SearchedMoviesReducer
    }
})


export {
    store
}