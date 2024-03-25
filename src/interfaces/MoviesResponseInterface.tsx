import {MovieInterface} from "./MovieInterface";


export interface MoviesResponseInterface {
    page: number;
    results: MovieInterface[];
    total_pages: number;
    total_results: number;
}