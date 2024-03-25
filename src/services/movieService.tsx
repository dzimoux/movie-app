import {api_key} from "./moviesService";
import {apiRequest} from "./moviesService";
import {MovieInterface} from "../interfaces/MovieInterface";
import {MoviesResponseInterface} from "../interfaces/MoviesResponseInterface";
import {IRes} from "../types/responseType";
import {MovieDetailsInterface} from "../interfaces/MovieDetailsInterface";
import {GenreListInterface} from "../interfaces/GenreListInterface";
import {ChoosedGenreInterface} from "../interfaces/ChoosedGenreInterface";
import {SearchedMoviesInterface} from "../interfaces/SearchedMoviesInterface";

const movieService = {
    getMoviesPages: (page:number):IRes<MoviesResponseInterface> => apiRequest.get('/discover/movie', {
        params: {
            page,
            api_key
        }
    }),

    getMoviesPagesbyId: (movie_id:number):IRes<MovieDetailsInterface> => apiRequest.get(`/movie/${movie_id}`, {
        params: {
            api_key
        }
    }),

    getGenreList: ():IRes<GenreListInterface> => apiRequest.get('/genre/movie/list', {
        params: {
            api_key
        }

    }),


    getChoosedGenre: (genre_id:number, page:number):IRes<ChoosedGenreInterface> => apiRequest.get(`/discover/movie?with_genres=${genre_id}&page=${page}`, {
        params: {
            page,
            genre_id,
            api_key
        }
    } ),

    getSearchedMovies: (searchInfo:string):IRes<SearchedMoviesInterface> => apiRequest.get(`/search/keyword?query=${searchInfo}`, {
            params: {
                api_key
            }
        }
    )


};

export {movieService};