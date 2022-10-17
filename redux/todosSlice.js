import { createSlice } from "@reduxjs/toolkit/";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        task: "Buy some bread and milk",
        module: "Example",
        date: "9/18/1998",
        time: "23:59",
        id: 1,
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
