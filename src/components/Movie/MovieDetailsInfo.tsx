import React from 'react';
import {MovieDetailsInterface} from "../../interfaces/Movie/MovieDetailsInterface";

export interface MovieDetInfoProps{
    movieDetails: MovieDetailsInterface
}
const MovieDetailsInfo:React.FC<MovieDetInfoProps> = ({movieDetails}) => {
    const {original_title,
        poster_path,
        budget,
        genres,
        overview,
        production_countries,
        release_date,
        runtime,
        spoken_languages,
        vote_average} = movieDetails

    return (
        <div>
            <div>
                <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/></div>
                <div>{original_title}</div>
                <div>{budget}</div>
                <div>{genres.map(genre => (
                    <span key={genre.id}>{genre.name}</span>
                ))}
                </div>
                <div>{overview}</div>
                <div> {production_countries.map(country => (
                    <div key={country.iso_3166_1}>{country.name}</div>
                ))}
                </div>
                <div>{release_date}</div>
                <div>{ runtime}</div>
                <div>{spoken_languages.map(language => (
                    <div key={language.iso_639_1}>{language.name}</div>
                ))}
                </div>
                <div>{vote_average}</div>

            </div>

        </div>
    );
};

export {MovieDetailsInfo};