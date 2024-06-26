import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useDispatch";
import {useAppSelector} from "../../hooks/useSelector";
import {GenreListSliceActions} from "../../store/slices/Genre/GenreListSlice";
import {GenreBasic} from "../../interfaces/Genre/GenreListInteface";
import {OneGenreComponent} from "../../components/Genre/OneGenreComponent/OneGenreComponent";
import {Header} from "../../components/Header/Header";

const GenresListPage = () => {
    const dispatch = useAppDispatch();
    const {genresState} = useAppSelector(state => state.genresList);

    useEffect(()=>{
        dispatch(GenreListSliceActions.getAllGenresList())
    },[])


    return (
        <div>
            <Header/>
            {genresState.genres.map((oneGenre:GenreBasic)=><OneGenreComponent key={oneGenre.id} oneGenre={oneGenre}/>)}
        </div>
    );
};

export {GenresListPage};