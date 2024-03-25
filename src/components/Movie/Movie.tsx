import React from 'react';
import {MovieInterface} from "../../interfaces/MovieInterface";
import {useNavigate} from "react-router-dom";
import {MovieProps} from "../../interfaces/MovieProps";


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