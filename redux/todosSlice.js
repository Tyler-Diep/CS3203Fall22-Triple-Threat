import { createSlice } from "@reduxjs/toolkit/";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        task: "Buy some bread and milk",
        module: "A Label",
        date: "9/18/1998",
        id: 1,
      },
      {
        task: "Buy some milk and bread",
        module: "A Label",
        date: "11/03/2001",
        id: 2,
      },
      {
        task: "Buy some bread, and, milk",
        module: "A Label",
        date: "11/17/2004",
        id: 3,
      },
    ],
    deleted: [],
  },
  reducers: {
    PREPEND: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
  },
});

export const { PREPEND } = todosSlice.actions;

export default todosSlice.reducer;
