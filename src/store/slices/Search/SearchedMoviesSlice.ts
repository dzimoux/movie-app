import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {movieService} from "../../../configs/movieService";
import {SearchInterface} from "../../../interfaces/Search/SearchInterface";

// interface SearchState{
//     searchedresults:object,
//     loading:boolean,
//     error:null
// }
const initialState = {
    searchedResults:{},
    requestedSearchResults: null as SearchInterface | null,
    loading:false,
    error:null
}

const getSearchedMovies = createAsyncThunk<SearchInterface, string>(
    'SearchedMoviesSlice/getSearchedMovies',
    async (searchInfo,{rejectWithValue}) => {
      try {
          const {data} =  await movieService.getSearchedMovies(searchInfo)
          return data
      } catch (e) {
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
                state.requestedSearchResults = action.payload
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

export {}