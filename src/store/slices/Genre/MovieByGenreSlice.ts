import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {movieService} from "../../../configs/movieService";
import {MoviesResponseInterface} from "../../../interfaces/Movie/MoviesResponseInterface";




const initialState ={
    chosenMovieState: [],
    loading: false,
    error:null
}


const getMovieByGenreFun = createAsyncThunk<MoviesResponseInterface, {genre_id:number, page:number}>(
'ChoosedGenreMovieSlice/getMovieByGenreFun',
    async ({genre_id, page},{rejectWithValue})=> {
try {
    const {data} = await movieService.getMovieByGenre(genre_id,page)
    return data
}catch (e) {
            const error: AxiosError = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
}
)


const MovieByGenreSlice = createSlice({
    name:'MovieByGenreSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
       builder
           .addCase(getMovieByGenreFun.pending, (state, action) => {
               state.loading = true; 
               state.error = null; 
           })
           .addCase(getMovieByGenreFun.fulfilled, (state, action) => {
               state.loading = false; 
               state.chosenMovieState = action.payload;
           })
           .addCase(getMovieByGenreFun.rejected, (state, action) => {
               state.loading = false;
               // @ts-ignore
               state.error = action.error.message;
           });
    }
})

const {reducer: MovieByGenreReducer, actions} = MovieByGenreSlice;

const MovieByGenreActions = {
    ...actions,
    getMovieByGenreFun
}

export {
    MovieByGenreActions,
    MovieByGenreReducer
}

