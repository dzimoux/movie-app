import {MovieDetailsInterface} from "./MovieDetailsInterface";

 export  interface MovieDetailsStateInterface {
    movieDetails: MovieDetailsInterface | null;
    loading: boolean;
    error: string | null;
}