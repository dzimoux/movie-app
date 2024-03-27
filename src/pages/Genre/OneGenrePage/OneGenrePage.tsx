import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useSelector";
import {useAppDispatch} from "../../../hooks/useDispatch";
import {MoviesByGenreActions} from "../../../store/slices/Genre/MoviesByGenreSlice";
import {MovieInterface, MoviesResponseInterface} from "../../../interfaces/Movie/MoviesResponseInterface";
import {OneGenrePageDetails} from "../../../components/Genre/OneGenreComponent/OneGenrePageDetails/OneGenrePageDetails";
import './OneGenrePage.scss'
import {Header} from "../../../components/Header/Header";

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
        <div id={'genrePage'}>
            <Header/>
            <div className="pagination-container">
                <button className="prev-button" disabled={parseInt(query.get('page') || '1') <= 1} onClick={prev}>PREV
                </button>
                <button className="next-button" disabled={parseInt(query.get('page') || '1') >= 500}
                        onClick={next}>NEXT
                </button>
            </div>

            <div className="grid-container">
                {chosenMovieState && chosenMovieState.results.map((oneGenrePageDetails: MovieInterface) =>
                    <div className="card">
                        <OneGenrePageDetails oneGenrePageDetails={oneGenrePageDetails}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export {OneGenrePage};