import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/redux/userSlice";
import bookReducer from "./utils/redux/bookSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    books: bookReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
