export interface MovieDetailsInterface{
    original_title: string;
    poster_path: string | null;
    budget: number;
    genres: GenresResponse[];
    overview: string;
    production_countries: CountriesInterface[];
    release_date: string;
    runtime: number;
    spoken_languages: LanguagesInterface[];
    vote_average: number;
    backdrop_path:string | null
}

export interface GenresResponse{
    id: number;
    name: string
}

export interface CountriesInterface{
    iso_3166_1: string;
    name: string
}

export interface LanguagesInterface{
    english_name: string;
    iso_639_1: string;
    name: string
}