import {MovieInterface} from "../Movie/MoviesResponseInterface";

export interface SearchInterface{
    page: number,
    results: MovieInterface[],
    total_pages: number,
    total_results: number
}