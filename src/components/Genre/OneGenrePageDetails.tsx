import React from 'react';
import {MovieInterface, MoviesResponseInterface} from "../../interfaces/Movie/MoviesResponseInterface";

export interface OneGenreDetailsProps{
    oneGenrePageDetails:MovieInterface
}

const OneGenrePageDetails:React.FC<OneGenreDetailsProps> = ({oneGenrePageDetails}) => {
    const { original_title, poster_path} = oneGenrePageDetails


    return (
        <div>
            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/></div>
            <div>{original_title}</div>
        </div>
    );
};

export {OneGenrePageDetails};