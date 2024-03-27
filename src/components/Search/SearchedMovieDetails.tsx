import React from 'react';
import {MovieInterface} from "../../interfaces/Movie/MoviesResponseInterface";
import {useNavigate} from "react-router-dom";
import './SearchedMovieDetails.scss'

interface searchedMovieProps {
    searchedMovie: MovieInterface
}

const SearchedMovieDetails: React.FC<searchedMovieProps> = ({searchedMovie}) => {
    const {poster_path, original_title, vote_average, id} = searchedMovie
    const navigator = useNavigate()
    const navigateMovieId = () => {
        return navigator(`/movies/movie_details/${id}`)
    }

    return (
        <div className="movie-card" onClick={navigateMovieId}>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
            </div>
            <div className="title">{original_title}</div>
            <div className="rating">{vote_average}</div>
        </div>
    );
};

export {SearchedMovieDetails};