import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = {};
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
