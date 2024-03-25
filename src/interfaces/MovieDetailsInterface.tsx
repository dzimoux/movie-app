export interface MovieDetailsInterface {
    original_title: string;
    poster_path: string | null;
    budget: number;
    genres: { id: number; name: string }[];
    overview: string;
    production_countries: { iso_3166_1: string; name: string }[];
    release_date: string;
    runtime: number;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    vote_average: number;
}

