import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useSelector";
import {useAppDispatch} from "../hooks/useDispatch";
import {MoviePagesActions} from "../store/slices/MoviePagesSlice";
import {useSearchParams} from "react-router-dom";
import {number} from "joi";
import {Movie} from "../components/Movie/Movie";
import {MovieInterface} from "../interfaces/MovieInterface";
import {Header} from "../components/Header/Header";

const MoviesHomePage = () => {
    const {movies} = useAppSelector(state => state.moviepages)
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        // @ts-ignore
        const page = query.get('page') ? parseInt(query.get('page')) : 0;
        dispatch(MoviePagesActions.getMoviePages(page));
    },[query.get('page')])

    const next = ()=>{
setQuery(prev => {
    // @ts-ignore
    query.set('page',(+prev.get('page')+ 1).toString() )
    return query
})
    }


    const prev = ()=>{
        setQuery(prev => {
            // @ts-ignore
            query.set('page',(+prev.get('page')- 1).toString() )
            return query
        })
    }



    return (
        <div>
            <Header/>
            <div>
                <button disabled={parseInt(query.get('page')|| '1') <= 1 } onClick={prev}>PREV</button>
                <button disabled={parseInt(query.get('page')|| '1') >= 500} onClick={next}>NEXT</button>
            {movies.results.map((oneMovie: MovieInterface) => <Movie key={oneMovie.id} oneMovie={oneMovie}/> )}

            </div>
        </div>
    );
};

export {MoviesHomePage};