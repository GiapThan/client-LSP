import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    idUser: "",
    userName: "",
    email: "",
    type: "",
    accessToken: "",
  },
  reducers: {
    setUserInfor: (state, action) => {
      return { ...state, ...action.payload };
    },
    deleteUserInfor: (state, action) => {
      return {
        isLogin: false,
        idUser: "",
        userName: "",
        email: "",
        type: "",
        accessToken: "",
      };
    },
  },
});

const { reducer, actions } = user;
export const { setUserInfor, deleteUserInfor } = actions;
export default reducer;
