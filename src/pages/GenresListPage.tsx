import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useSelector";
import {useAppDispatch} from "../hooks/useDispatch";
import {GenreListSliceActions} from "../store/slices/GenreListSlice";
import {GenresListDetails} from "../components/Genres/GenresListDetails";
import {GenreListInterface, Genres} from "../interfaces/GenreListInterface";

const GenresListPage = () => {
    const {genresState} = useAppSelector(state => state.genreslist);
const dispatch = useAppDispatch();

useEffect(()=> {
    dispatch(GenreListSliceActions.getAllGenresList());
},[])
    const genreArray = genresState.genres;

console.log(genreArray)
    return (
        <div>
            {genreArray.map ((oneGenre:Genres)=> <GenresListDetails key={oneGenre.id} oneGenre={oneGenre}/>)}
        </div>
    );
};

export {GenresListPage};