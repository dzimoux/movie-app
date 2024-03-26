import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useSelector";
import {useAppDispatch} from "../../hooks/useDispatch";
import {MovieByGenreActions} from "../../store/slices/Genre/MovieByGenreSlice";
import {MovieInterface, MoviesResponseInterface} from "../../interfaces/Movie/MoviesResponseInterface";
import {OneGenrePageDetails} from "../../components/Genre/OneGenrePageDetails";

const OneGenrePage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {chosenMovieState} = useAppSelector(state => state.chosenGenreMovie)
    const [query,setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        if(!chosenMovieState && id && (query.get('page'))){
            dispatch(MovieByGenreActions.getMovieByGenreFun({genre_id:Number(id),page:Number((query.get('page')))}))
        }
    },[id,dispatch,chosenMovieState])

    console.log(chosenMovieState)

    return (
        <div>
            {chosenMovieState && chosenMovieState.map((oneGenrePageDetails:MovieInterface)=><OneGenrePageDetails oneGenrePageDetails={oneGenrePageDetails}/>)}
        </div>
    );
};

export {OneGenrePage};