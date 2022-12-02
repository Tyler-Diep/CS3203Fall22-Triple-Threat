import { createSlice } from "@reduxjs/toolkit/";

export const todosSlice = createSlice({

  name: "todo",
  initialState: {
    todos: [],
    deleted: [],
    completed: [],
  },
  reducers: {
    PREPEND: (state, action) => { // Add to beginning of the todo list
      state.todos = [action.payload, ...state.todos];
      //Save state.todos to sync with database
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
    },
    PREPEND_COMPLETE: (state, action) => {
      //state.completed =  state.completed.concat(state.todos.filter((todo) => todo.completed == true));
      state.completed = [action.payload, ...state.deleted];
    },
    // This is confusing because it actually removes from todos not completed
    REMOVE_COMPLETE: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.completed == false);
    },
    REMOVE_FROM_COMPLETE: (state, action) => { // Remove from the deleted list
      state.completed = state.completed.filter((todo) => todo.id != action.payload);
    },
    SET_TODOS: (state, action) => { 
      state.todos = action.payload;
    },
    SET_COMPLETED: (state, action) => { 
      state.completed = action.payload;
    },
    SET_DELETED: (state, action) => { 
      state.deleted = action.payload;
    },
  },
});

export const { PREPEND, PREPEND_DELETE, REMOVE, TOGGLE_COMPLETED, 
              PREPEND_COMPLETE, REMOVE_COMPLETE, REMOVE_DELETE, REMOVE_FROM_COMPLETE, SET_COMPLETED, SET_DELETED, SET_TODOS} = todosSlice.actions;

export default todosSlice.reducer;
