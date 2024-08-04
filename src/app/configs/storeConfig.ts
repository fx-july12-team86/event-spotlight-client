import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/User';
import { eventReducer } from '../../entities/Event';

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['event/setImage'],
        ignoredPaths: ['event.eventImages'],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
