import React from 'react';
import {useNavigate} from "react-router-dom";

import {MovieInterface} from "../../../../interfaces/Movie/MoviesResponseInterface";
import './OneGenrePageDetails.scss'

export interface OneGenreDetailsProps {
    oneGenrePageDetails: MovieInterface
}

const OneGenrePageDetails: React.FC<OneGenreDetailsProps> = ({oneGenrePageDetails}) => {
    const {original_title, poster_path, id} = oneGenrePageDetails
    const navigate = useNavigate();
    const navigation = () => {
        navigate(`/movies/movie_details/${id}`)
    }

    return (
        <div onClick={navigation} className="movie-details">
            <div className="movie-сard">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}
                     className="movie-poster"/>
            </div>
            <div className="movie-title">{original_title}</div>
        </div>

    );
};

export {OneGenrePageDetails};