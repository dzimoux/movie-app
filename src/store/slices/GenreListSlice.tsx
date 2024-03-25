import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../services";
import {GenreListInterface} from "../../interfaces/GenreListInterface";



const initialState = {
    genresState: {genres: []},
    loading: false,
    error:null
}



const getAllGenresList = createAsyncThunk<GenreListInterface>(
'GenreListSlice/getAllGenresList',
    async (_, {rejectWithValue}) => {
try {
    const {data} = await movieService.getGenreList()
    return data
} catch (e) {
    // @ts-ignore
    const error = e.response as  AxiosError
    // @ts-ignore
    return rejectWithValue(error.response.data)
}
    }
)

const GenreListSlice = createSlice({
    name:'GenreListSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getAllGenresList.fulfilled, (state, action) => {
                // @ts-ignore
                state.genresState = action.payload
            })

    }
})

const {reducer: GenreListSliceReducer, actions} = GenreListSlice;

const GenreListSliceActions = {
    ...actions,
    getAllGenresList
}

export {
    GenreListSliceActions,
    GenreListSliceReducer
}

