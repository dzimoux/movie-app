import React, { useState} from 'react';

import {useAppDispatch} from "../../hooks/useDispatch";
import {useAppSelector} from "../../hooks/useSelector";
import {SearchedMoviesActions} from "../../store/slices/Search/SearchedMoviesSlice";
import {Header} from "../../components/Header/Header";
import {MovieInterface} from "../../interfaces/Movie/MoviesResponseInterface";
import {SearchedMovieDetails} from "../../components/Search/SearchedMovieDetails";

const SearchPage = () => {
    const dispatch = useAppDispatch()
    const {requestedSearchResults} = useAppSelector(state => state.searchedMovies);
    const [searchResult, setSearchedResult] = useState<string>('');



    const ChangedSearchFun = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedResult(event.target.value)
    }

    const SubmitFun = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(SearchedMoviesActions.getSearchedMovies(searchResult))

    }


    return (
        <div>
            <Header/>
            <form onSubmit={SubmitFun}>
                <input type={"text"} placeholder={'Name of movie'} value={searchResult} onChange={ChangedSearchFun}/>
                <button type={"submit"}>SEARCH</button>
            </form>
            {requestedSearchResults && requestedSearchResults.results.map((searchedMovie:MovieInterface) => <SearchedMovieDetails searchedMovie={searchedMovie}/>)}
        </div>
    );
    };

export {SearchPage};