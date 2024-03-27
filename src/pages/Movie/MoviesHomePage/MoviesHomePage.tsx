import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../../hooks/useDispatch";
import {useAppSelector} from "../../../hooks/useSelector";
import {MoviePagesActions} from "../../../store/slices/Movie/MoviePagesSlice";
import {Header} from "../../../components/Header/Header";
import {MovieInterface} from "../../../interfaces/Movie/MoviesResponseInterface";
import {Movie} from "../../../components/Movie/Movie";
import './MoviesHomePage.scss'



const MoviesHomePage = () => {
    const {movies} = useAppSelector(state => state.moviePages);
    const dispatch = useAppDispatch();
    const [query,setQuery] = useSearchParams({page:'1'});

    useEffect(()=>{
        const page = query.get('page')
        dispatch(MoviePagesActions.getMoviePages(Number(page)))
    },[query.get('page')])

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




    return (
        <div className="component-container">
            <Header />
            <div className="buttons-container">
                <button
                    className="button-prev"
                    disabled={parseInt(query.get('page') || '1') <= 1}
                    onClick={prev}
                >
                    PREV
                </button>
                <button
                    className="button-next"
                    disabled={parseInt(query.get('page') || '1') >= 500}
                    onClick={next}
                >
                    NEXT
                </button>
            </div>
            <div className="movies-grid">
                {movies.results.map((oneMovie: MovieInterface) => (
                    <Movie key={oneMovie.id} oneMovie={oneMovie}/>
                ))}
            </div>
        </div>

    );
};

export {MoviesHomePage};