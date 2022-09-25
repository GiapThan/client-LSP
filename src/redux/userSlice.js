import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    isLogin: true,
    userName: "Dang giap than",
    email: "",
    type: "",
    accessToken: "",
  },
  reducers: {
    setUserInfor: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const { reducer, actions } = user;
export const { setUserInfor } = actions;
export default reducer;
