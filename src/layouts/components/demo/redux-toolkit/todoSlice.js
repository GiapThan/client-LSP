import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    moveTodo: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

const { reducer, actions } = todo;
export const { addTodo, moveTodo } = actions;
export default reducer;
