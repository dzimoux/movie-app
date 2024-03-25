import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {SearchedMoviesInterface} from "../../interfaces/SearchedMoviesInterface";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {searchMovieResponse} from "../../pages/SearchPage";

// interface SearchState{
//     searchedresults:object,
//     loading:boolean,
//     error:null
// }
const initialState = {
    searchedresults:{},
    requestedsearchresults: null as SearchedMoviesInterface | null,
    loading:false,
    error:null
}

const getSearchedMovies = createAsyncThunk<SearchedMoviesInterface, string>(
    'SearchedMoviesSlice/getSearchedMovies',
    async (searchInfo,{rejectWithValue}) => {
try {
   const {data} =  await movieService.getSearchedMovies(searchInfo)
    return data
}catch (e){
    const error: AxiosError = e as AxiosError;
    return rejectWithValue(error.response?.data);
}
    }
)


const SearchedMoviesSlice = createSlice({
    name:'SearchedMoviesSlice',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder

            .addCase(getSearchedMovies.fulfilled,(state, action)=>{
                state.requestedsearchresults = action.payload
            })

    }
})

const {reducer:SearchedMoviesReducer, actions} = SearchedMoviesSlice;

const SearchedMoviesActions = {
    ...actions,
    getSearchedMovies
}

export {
    SearchedMoviesReducer,
    SearchedMoviesActions
}