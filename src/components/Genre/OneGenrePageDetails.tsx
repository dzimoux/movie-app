import React from 'react';
import {MovieInterface, MoviesResponseInterface} from "../../interfaces/Movie/MoviesResponseInterface";
import {useNavigate} from "react-router-dom";

export interface OneGenreDetailsProps{
    oneGenrePageDetails:MovieInterface
}

const OneGenrePageDetails:React.FC<OneGenreDetailsProps> = ({oneGenrePageDetails}) => {
    const { original_title, poster_path,id} = oneGenrePageDetails
    const navigate = useNavigate();
    const navigation = ()=>{
        navigate(`/movies/movie_details/${id}`)
    }

    return (
        <div onClick={navigation}>
            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/></div>
            <div>{original_title}</div>
        </div>
    );
};

export {OneGenrePageDetails};