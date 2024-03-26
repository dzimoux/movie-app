import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useSelector";
import {useAppDispatch} from "../../hooks/useDispatch";
import {MoviesByGenreActions} from "../../store/slices/Genre/MoviesByGenreSlice";
import {MovieInterface, MoviesResponseInterface} from "../../interfaces/Movie/MoviesResponseInterface";
import {OneGenrePageDetails} from "../../components/Genre/OneGenrePageDetails";

const OneGenrePage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {chosenMovieState} = useAppSelector(state => state.chosenGenreMovies)
    const [query,setQuery] = useSearchParams({page: '1'});
    const next = () => {
        setQuery(prev => {

            // @ts-ignore
            query.set('page', (+prev.get('page') + 1).toString())
            return query
        })
    }


    const prev = () => {
        setQuery(prev => {
            // @ts-ignore
            query.set('page', (+prev.get('page') - 1).toString())
            return query
        })

    }


    useEffect(()=>{
        if(chosenMovieState && id && (query.get('page'))){
            dispatch(MoviesByGenreActions.getMoviesByGenreFun({genre_id:Number(id),page:Number((query.get('page')))}))
        }
    },[id,(query.get('page'))])




    return (
        <div>
            <button disabled={parseInt(query.get('page') || '1') <= 1} onClick={prev}>PREV</button>
            <button disabled={parseInt(query.get('page') || '1') >= 500} onClick={next}>NEXT</button>
            {chosenMovieState && chosenMovieState.results.map((oneGenrePageDetails:MovieInterface)=><OneGenrePageDetails oneGenrePageDetails={oneGenrePageDetails}/>)}
        </div>
    );
};

export {OneGenrePage};