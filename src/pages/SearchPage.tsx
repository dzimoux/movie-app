import React, {useEffect, useState} from 'react';
import {Header} from "../components/Header/Header";
import {useAppDispatch} from "../hooks/useDispatch";
import {useAppSelector} from "../hooks/useSelector";
import {SearchedMoviesActions} from "../store/slices/SearchedMoviesSlice";
import {movieService} from "../services";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Genres} from "../interfaces/GenreListInterface";
import {SearchedMovieResultDetails} from "../components/Search/SearchedMovieResultDetails";

export interface searchMovieResponse{
    page:number,
    results: Genres[],
    total_pages: number,
    total_results:number
}



    const SearchPage = () => {
        const dispatch = useAppDispatch();
        const { searchedresults } = useAppSelector(state => state.searchedmovies);
        const {requestedsearchresults} = useAppSelector(state => state.searchedmovies)
        const [searchResult, setSearchedResult] = useState<string>('');
        const [result, setSubmitResult] = useState<searchMovieResponse | null>(null);

        useEffect(() => {
            console.log(requestedsearchresults);
        }, [requestedsearchresults]);

        const handleChangedSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchedResult(event.target.value);
            console.log(searchResult);
        }

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
dispatch(SearchedMoviesActions.getSearchedMovies(searchResult))
            console.log(requestedsearchresults)
        }

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder={'Name of movie'} value={searchResult} onChange={handleChangedSearch}/>
                <button type={"submit"}>SEARCH</button>
            </form>
<SearchedMovieResultDetails requestedsearchresults={requestedsearchresults}/>
        </div>
    );
};

export {SearchPage};