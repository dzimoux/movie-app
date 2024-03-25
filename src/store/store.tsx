import {configureStore} from "@reduxjs/toolkit";
import {LoadingReducer} from "./slices/LoadingSlice";
import {MoviePagesReducer} from "./slices/MoviePagesSlice";
import {MovieDetailsReducer} from "./slices/MovieDetailsSlice";
import {GenreListSliceReducer} from "./slices/GenreListSlice";
import {ChoosedGenreMovieReducer} from "./slices/ChoosedGenreMovieSlice";
import {SearchedMoviesReducer} from "./slices/SearchedMoviesSlice";


const store = configureStore({
    reducer:{
        LoadingReducer,
        moviepages: MoviePagesReducer,
        moviedetails: MovieDetailsReducer,
        genreslist: GenreListSliceReducer,
        choosedgenremovie: ChoosedGenreMovieReducer,
        searchedmovies:SearchedMoviesReducer
    }
})


export {
    store
}