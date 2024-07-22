import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: {
    searchList: [],
  },
  reducers: {
    addSearchMovieList: (state, action) => {
      state.searchList = action.payload;
    },
  },
});
export const { addSearchMovieList } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
