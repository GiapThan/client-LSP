import { createSlice } from "@reduxjs/toolkit";

const system = createSlice({
  name: "system",
  initialState: {
    isLoadingPage: false,
    isCloseModal: false,
  },
  reducers: {
    LoadingPage: (state, action) => {
      return action.payload;
    },
    CloseModal: (state, action) => {
      console.log("close action ---", state);
      return { ...state, isCloseModal: !state.isCloseModal };
    },
  },
});

const { reducer, actions } = system;
export const { LoadingPage, CloseModal } = actions;
export default reducer;
