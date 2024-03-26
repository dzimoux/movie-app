import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

interface IState  {
isLoading:boolean,

}

const initialState: IState = {
    isLoading: false
};

const LoadingSlice = createSlice({
name:'LoadingSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addMatcher(isFulfilled(),state => {
                    state.isLoading = false
                })
            .addMatcher(isPending(), state => {
                state.isLoading = true
            })
            .addMatcher(isRejected(), state => {
                state.isLoading = false
            })
})

const {reducer:LoadingReducer} = LoadingSlice;

export {
     LoadingReducer
 }