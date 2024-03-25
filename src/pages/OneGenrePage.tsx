import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../hooks/useSelector";
import {useAppDispatch} from "../hooks/useDispatch";
import {ChoosedGenreMovieActions} from "../store/slices/ChoosedGenreMovieSlice";
import {string} from "joi";
import {OneGenrePageDetails} from "../components/Genres/OneGenrePageDetails";

const OneGenrePage = () => {
    const {id} = useParams()
const {choosedmoviestate} = useAppSelector(state => state.choosedgenremovie)
    console.log(choosedmoviestate)
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(()=>{
        console.log("ID:", id);
        console.log("Page:", query.get('page'));
if(!choosedmoviestate){
        // @ts-ignore
        dispatch(ChoosedGenreMovieActions.getChoosedGenreMovie(id, (query.get('page'))))}
    },[id,choosedmoviestate, dispatch])

console.log(choosedmoviestate)

    return (
        <div>

            {/*{choosedmoviestate ? <OneGenrePageDetails choosedmoviestate={choosedmoviestate}/> : null}*/}
        </div>
    );
};

export {OneGenrePage};