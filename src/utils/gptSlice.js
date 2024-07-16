import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name :'gptSearch',
    initialState : {
        showGPTSearch : false,
    },
    reducers:{
        toggleShowSearchView : (state,action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
});
export const {toggleShowSearchView} = gptSlice.actions;
export default gptSlice.reducer;