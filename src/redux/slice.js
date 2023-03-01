import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import appService from './appService';

const initialState={
    chars:[],
    spells:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
}
export const getChars=createAsyncThunk('appSliceName/getAllCharacters',async()=>{
    try {
        return await appService.getChars();
    } catch (error) {
        const message=(error.response.data || error.response || error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})
export const getSpells=createAsyncThunk('appSliceName/getAllSpells',async()=>{
    try {
        return await appService.getSpells();
    } catch (error) {
        const message=(error.response.data || error.response || error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
})

export const appSlice=createSlice({
    name:'appSliceName',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getChars.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getChars.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload
        })
        .addCase(getChars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.chars=action.payload
        })
        .addCase(getSpells.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getSpells.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload
        })
        .addCase(getSpells.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.spells=action.payload
        })
    }
});
export default appSlice.reducer;