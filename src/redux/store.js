import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import systemReducer from "./systemSlice";

const rootReducer = {
  user: userReducer,
  system: systemReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
