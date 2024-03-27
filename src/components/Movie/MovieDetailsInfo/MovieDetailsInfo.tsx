import React from 'react';

import {MovieDetailsInterface} from "../../../interfaces/Movie/MovieDetailsInterface";
import './MovieDetailsInfo.scss'

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
        vote_average,
        backdrop_path} = movieDetails

    return (
        <div className="movie-details-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})` }}>
            <div className="content-container">
                <div className="info-container">
                    <div className="movie-title">{original_title}</div>
                    <div className="movie-details">
                        <div className="detail">Budget: {budget}</div>
                        <div className="detail">Genres: {genres.map(genre => (
                            <span key={genre.id}>{genre.name}</span>
                        ))}</div>
                        <div className="detail">Overview: {overview}</div>
                        <div className="detail">Production Countries: {production_countries.map(country => (
                            <div key={country.iso_3166_1}>{country.name}</div>
                        ))}</div>
                        <div className="detail">Release Date: {release_date}</div>
                        <div className="detail">Runtime: {runtime}</div>
                        <div className="detail">Spoken Languages: {spoken_languages.map(language => (
                            <div key={language.iso_639_1}>{language.name}</div>
                        ))}</div>
                        <div className="detail">Vote Average: {vote_average}</div>
                    </div>
                </div>
                <div className="poster-container">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} className="poster" />
                </div>
            </div>
        </div>


    );
};

export {MovieDetailsInfo};