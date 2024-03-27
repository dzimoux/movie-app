import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch} from "../../../hooks/useDispatch";
import {useAppSelector} from "../../../hooks/useSelector";
import {MovieDetailsActions} from "../../../store/slices/Movie/MovieDetailsSlice";
import {Header} from "../../../components/Header/Header";
import {MovieDetailsInfo} from "../../../components/Movie/MovieDetailsInfo/MovieDetailsInfo";
import './MovieDetailsPage.scss'

const MovieDetailsPage = () => {
    const {movieDetails} = useAppSelector(state => state.movieDetails)
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(MovieDetailsActions.getMovieDetails(Number(id)))
        }
    }, [id])


    return (
        <div>
            <Header/>
            <div>
                {movieDetails && <MovieDetailsInfo movieDetails={movieDetails}/>}
            </div>
        </div>
    );
};

export {MovieDetailsPage};