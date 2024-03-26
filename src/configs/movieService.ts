import {IRes} from "../types/responseType";
import {api_key, axiosInstance} from "./axiosInstance";
import {MoviesResponseInterface} from "../interfaces/Movie/MoviesResponseInterface";
import {MovieDetailsInterface} from "../interfaces/Movie/MovieDetailsInterface";
import {GenreListInterface} from "../interfaces/Genre/GenreListInteface";
import {SearchInterface} from "../interfaces/Search/SearchInterface";




const movieService = {
    getMoviesPages: (page: number): IRes<MoviesResponseInterface> => axiosInstance.get('/discover/movie', {
        params: {
            page,
            api_key
        }
    }),
    getMoviebById: (movie_id:number):IRes<MovieDetailsInterface> => axiosInstance.get(`/movie/${movie_id}`, {
        params: {
            api_key
        }
    }),
    getGenreList: ():IRes<GenreListInterface> => axiosInstance.get('/genre/movie/list', {
        params: {
            api_key
        }

    }),
    getMoviesByGenre:(genre_id:number,page:number):IRes<MoviesResponseInterface> => axiosInstance.get(`/discover/movie?with_genres=${genre_id}&page=${page}`,{
        params:{
            genre_id,
            page,
            api_key
        }
    }),
    getSearchedMovies: (searchInfo:string):IRes<SearchInterface> => axiosInstance.get(`/search/movie?query=${searchInfo}`, {
            params: {
                searchInfo,
                api_key
            }
        }
    )



}

export {
    movieService
}