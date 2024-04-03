import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Todos = {
  id: string;
  text: string;
};

type State = {
  todos: Todos[];
};

const initialState: State = {
  todos: [],
};
const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<string | undefined>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
