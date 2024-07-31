import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EventState {
  eventImages: (File | null)[];
}

export const initialState: EventState = {
  eventImages: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<{ id: number; image: File }>) => {
      state.eventImages[action.payload.id] = action.payload.image;
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.eventImages[action.payload] = null;
    },
  },
});

export const { setImage, removeImage } = eventSlice.actions;

export default eventSlice.reducer;
