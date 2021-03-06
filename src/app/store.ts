import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "features/counter/counterSlice";
import themeSlice from "features/theme/themeSlice";
import todoSlice from "features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
    todo: todoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
