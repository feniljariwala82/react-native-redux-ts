import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { TodoState, TodoType } from "types";
import { index } from "features/todo/api";

/**
 * assign data type here
 */
const todoAdapter = createEntityAdapter<TodoType>({
  selectId: (todo) => todo.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

/**
 * assign additional types here
 */
const initialState = todoAdapter.getInitialState<TodoState>({
  status: "idle",
  error: "",
});

export const fetchTodos = createAsyncThunk("todo/index", async () => {
  const response = await index();
  return response;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.status = "succeeded";
      state.error = "";
      //   state.data = action.payload;
      todoAdapter.upsertMany(state, payload);
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message
        ? action.error.message
        : "Internal server error";
    });
  },
});

export const {} = todoSlice.actions;

export const { selectAll: selectAllTodo, selectById: selectTodoById } =
  todoAdapter.getSelectors();

export default todoSlice.reducer;
