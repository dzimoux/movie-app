import React from 'react';
import {GenreBasic} from "../../interfaces/Genre/GenreListInteface";
import {useNavigate} from "react-router-dom";

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
        <div>
                <div onClick={navigateOneGenreMovies}>
                    <p>{name}</p>
                </div>
        </div>
    );
};

export {OneGenreComponent};