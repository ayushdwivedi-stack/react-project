import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Learn Redux Toolkit",
      completed: false,
      priority: "Medium",
      category: "Study",
      dueDate: "",
      createdAt: new Date().toISOString(),
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        completed: false,
        priority: action.payload.priority,
        category: action.payload.category,
        dueDate: action.payload.dueDate,
        createdAt: new Date().toISOString(),
      };

      state.todos.push(todo);
    },

    removeTodos: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodos: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },

    toggleComplete: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  toggleComplete,
  deleteTodos,
} = todoSlice.actions;

export default todoSlice.reducer;