import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

export interface UserState {
  location: string;
  user: null | User;
}

export const initialState: UserState = {
  location: 'Oбрати місто',
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserLocation, setUser } = userSlice.actions;

export default userSlice.reducer;
