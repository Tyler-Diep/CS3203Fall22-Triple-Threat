import { createSlice } from "@reduxjs/toolkit/";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        task: "Buy some bread and milk",
        module: "Example",
        date: "9-18-1998",
        time: "23:59",
        completed: false,
        id: 1,
      },
    ],
    deleted: [],
    completed: [],
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
    TOGGLE_COMPLETED: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    PREPEND_COMPLETE: (state, action) => {
      state.completed = state.todos.filter((todo) => todo.completed == true);
    },
    REMOVE_COMPLETE: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.completed == false);
    }
  },
});

export const { PREPEND, PREPEND_DELETE, REMOVE, TOGGLE_COMPLETED, 
              PREPEND_COMPLETE, REMOVE_COMPLETE } = todosSlice.actions;

export default todosSlice.reducer;
