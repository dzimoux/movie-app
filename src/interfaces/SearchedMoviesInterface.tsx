export interface SearchedMoviesInterface{
page:number,
    results: SearchedMoviesArrayInterface[],
    total_pages:number,
    total_results:number
}

export interface SearchedMoviesArrayInterface{
    id:number,
    name:string
}