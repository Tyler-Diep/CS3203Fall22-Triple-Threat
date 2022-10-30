import { createSlice } from "@reduxjs/toolkit/";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [ // Our inital todo list has one todo
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
    PREPEND: (state, action) => { // Add to beginning of the todo list
      state.todos = [action.payload, ...state.todos];
    },
    REMOVE: (state, action) => { // Remove from the todo list
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    REMOVE_DELETE: (state, action) => { // Remove from the deleted list
      state.deleted = state.deleted.filter((todo) => todo.id != action.payload);
    },
    PREPEND_DELETE: (state, action) => { // Add to beginning of the deleted list
      state.deleted = [action.payload, ...state.deleted];
    },
  },
});

export const { PREPEND, PREPEND_DELETE, REMOVE, REMOVE_DELETE} = todosSlice.actions;

export default todosSlice.reducer;
