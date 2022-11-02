import { createSlice } from "@reduxjs/toolkit/";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [ // Our inital todo list has one todo
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
    TOGGLE_COMPLETED: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    PREPEND_COMPLETE: (state, action) => {
      state.completed =  state.completed.concat(state.todos.filter((todo) => todo.completed == true));
    },
    REMOVE_COMPLETE: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.completed == false);
    }
  },
});

export const { PREPEND, PREPEND_DELETE, REMOVE, TOGGLE_COMPLETED, 
              PREPEND_COMPLETE, REMOVE_COMPLETE, REMOVE_DELETE} = todosSlice.actions;

export default todosSlice.reducer;