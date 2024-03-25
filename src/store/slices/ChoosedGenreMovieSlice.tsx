import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ChoosedGenreInterface} from "../../interfaces/ChoosedGenreInterface";
import {movieService} from "../../services";
import {AxiosError} from "axios";

const initialState ={
    choosedmoviestate: {},
    loading: false,
    error:null
}




const getChoosedGenreMovie = createAsyncThunk<ChoosedGenreInterface, {genre_id:number, page:number}>(
'ChoosedGenreMovieSlice/getChoosedGenreMovie',
    async ({genre_id, page},{rejectWithValue})=> {
try {
    const {data} = await movieService.getChoosedGenre(genre_id,page)
    return data
}catch (e) {
            const error: AxiosError = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
}
)


const ChoosedGenreMovieSlice = createSlice({
    name:'ChoosedGenreMovieSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
       builder
           .addCase(getChoosedGenreMovie.pending, (state, action) => {
               state.loading = true; 
               state.error = null; 
           })
           .addCase(getChoosedGenreMovie.fulfilled, (state, action) => {
               state.loading = false; 
               state.choosedmoviestate = action.payload;
           })
           .addCase(getChoosedGenreMovie.rejected, (state, action) => {
               state.loading = false;
               // @ts-ignore
               state.error = action.error.message;
           });
    }
})

const {reducer: ChoosedGenreMovieReducer, actions} = ChoosedGenreMovieSlice;

const ChoosedGenreMovieActions = {
    ...actions,
    getChoosedGenreMovie
}

export {
    ChoosedGenreMovieReducer,
    ChoosedGenreMovieActions
}

