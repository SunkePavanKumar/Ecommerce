import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    fullName: "",
    image: "",
    email: "",
  },
};
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userReducer: (state, action) => {
      if (action.payload.type === "addData") {
        state.user = action.payload.data;
      }
      if (action.payload.type === "logout") {
        state.user = {};
      }
    },
  },
});

export const { userReducer } = userSlice.actions;
export default userSlice.reducer;
