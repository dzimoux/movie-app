import React from 'react';
import {useNavigate} from "react-router-dom";

import {GenreBasic} from "../../../interfaces/Genre/GenreListInteface";
import './OneGenreComponent.scss'


export interface oneGenreProps{
oneGenre:GenreBasic
}
const OneGenreComponent:React.FC<oneGenreProps> = ({oneGenre}) => {
const {id,name} = oneGenre;
const navigate = useNavigate();
    const navigateOneGenreMovies = ()=>{
        return  navigate(`/one_genre_movies/${id}`)
    }

    return (
        <div className="genre-container">
            <div className="genre-card" onClick={navigateOneGenreMovies}>
                <p className="genre-text">{name}</p>
            </div>
        </div>

    );
};

export {OneGenreComponent};