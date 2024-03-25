import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useSelector";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useDispatch";
import {MovieDetailsActions} from "../../store/slices/MovieDetailsSlice";
import {MovieDetailsInfo} from "./MovieDetailsInfo";
import {Header} from "../Header/Header";


const MovieDetails = () => {
const {id} = useParams();
const dispatch = useAppDispatch();
const {movieDetails} = useAppSelector(state => state.moviedetails)

useEffect(()=>{
    if(id){
        const movie_id = parseInt(id)
    dispatch(MovieDetailsActions.getMovieDetails(movie_id))}
},[id])



    // @ts-ignore
    return (
        <div>
            <Header/>
            <div>
            {movieDetails ? <MovieDetailsInfo movieDetails={movieDetails}/> : null}
            </div>
        </div>
    );

};

export {MovieDetails};