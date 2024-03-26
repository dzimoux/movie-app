import React from 'react';
import {useNavigate} from "react-router-dom";

import {MovieInterface} from "../../interfaces/Movie/MoviesResponseInterface";


export interface MovieProps  {
    oneMovie: MovieInterface
}

const Movie: React.FC<MovieProps> = ({oneMovie}) => {
    const {poster_path,original_title,vote_average,id} = oneMovie;
    const navigator = useNavigate();
    const navigateMovieId = ()=>{
        return navigator(`/movies/movie_details/${id}`)
    }

    return (
        <div onClick={navigateMovieId}>
            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/></div>
            <div>{original_title}</div>
            <div>{vote_average}</div>
        </div>
    );
};

export {Movie};