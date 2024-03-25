import React from 'react';
import {MovieProps} from "../../interfaces/MovieProps";
import {GenreListInterface, Genres, oneGenreInterface} from "../../interfaces/GenreListInterface";
import {useNavigate} from "react-router-dom";


const GenresListDetails: React.FC<oneGenreInterface> = ({oneGenre}) => {
const {id,name} = oneGenre;
const navigate = useNavigate();
const navigateToOneGenrePage = ()=>{
   return  navigate(`/one_genre_page/${id}`)
}

    return (
        <div>
            <div onClick={navigateToOneGenrePage}>
                <p>{name}</p>
            </div>
        </div>
    );
};

export {GenresListDetails};