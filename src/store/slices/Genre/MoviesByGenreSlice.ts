import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {movieService} from "../../../configs/movieService";
import { MoviesResponseInterface} from "../../../interfaces/Movie/MoviesResponseInterface";


interface IState {
chosenMovieState:MoviesResponseInterface
}


const initialState:IState ={
    chosenMovieState: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },

}


const getMoviesByGenreFun = createAsyncThunk<MoviesResponseInterface, {genre_id:number, page:number}>(
'ChoosedGenreMovieSlice/getMovieByGenreFun',
    async ({genre_id, page},{rejectWithValue})=> {
try {
    const {data} = await movieService.getMoviesByGenre(genre_id,page)
    return data
}catch (e) {
            const error: AxiosError = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
}
)


const MoviesByGenreSlice = createSlice({
    name:'MovieByGenreSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
       builder

           .addCase(getMoviesByGenreFun.fulfilled, (state, action) => {
               state.chosenMovieState = action.payload;
           })

    }
})

const {reducer: MoviesByGenreReducer, actions} = MoviesByGenreSlice;

const MoviesByGenreActions = {
    ...actions,
    getMoviesByGenreFun
}

export {
    MoviesByGenreActions,
    MoviesByGenreReducer
}

