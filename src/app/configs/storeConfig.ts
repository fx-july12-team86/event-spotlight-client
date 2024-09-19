import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'src/entities/User';
import { eventReducer } from 'src/entities/Event';
import dialogReducer from 'src/shared/store/dialogReducer';
import sideBarSlice from 'src/shared/store/sideBarReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    dialog: dialogReducer,
    sidebar: sideBarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['event/setImage'],
        ignoredPaths: ['event.eventImages'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
