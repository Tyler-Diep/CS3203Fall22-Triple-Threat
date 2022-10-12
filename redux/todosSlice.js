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
    REMOVE: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    PREPEND_DELETE: (state, action) => {
      state.deleted = [action.payload, ...state.deleted];
    },
  },
});

export const { PREPEND, PREPEND_DELETE, REMOVE } = todosSlice.actions;

export default todosSlice.reducer;
