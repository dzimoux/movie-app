import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch} from "../../hooks/useDispatch";
import {useAppSelector} from "../../hooks/useSelector";
import {MoviePagesActions} from "../../store/slices/Movie/MoviePagesSlice";
import {Header} from "../../components/Header/Header";
import {MovieInterface} from "../../interfaces/Movie/MoviesResponseInterface";
import {Movie} from "../../components/Movie/Movie";



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
        <div>
            <Header/>
            <button disabled={parseInt(query.get('page') || '1') <= 1} onClick={prev}>PREV</button>
            <button disabled={parseInt(query.get('page') || '1') >= 500} onClick={next}>NEXT</button>
            { movies.results.map((oneMovie: MovieInterface) => <Movie key={oneMovie.id} oneMovie={oneMovie}/>)}
        </div>
    );
};

export {MoviesHomePage};