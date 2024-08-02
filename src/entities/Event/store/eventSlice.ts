import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EventState {
  eventImages: (File | null)[];
  title: string;
  category: string;
  subCategory: string;
  address: string;
  price: string;
  date: string;
  time: string;
  isOnline: boolean;
  isFree: boolean;
}

export const initialState: EventState = {
  eventImages: [],
  title: '',
  category: 'Обери категорію',
  subCategory: 'Обери підкатегорію (за бажанням)',
  address: '',
  price: '',
  date: '',
  time: '',
  isOnline: false,
  isFree: false,
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
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action: PayloadAction<string>) => {
      state.subCategory = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setIsOnline: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
    setIsFree: (state, action: PayloadAction<boolean>) => {
      state.isFree = action.payload;
    },
  },
});

export const {
  setImage,
  removeImage,
  setTitle,
  setCategory,
  setSubCategory,
  setAddress,
  setPrice,
  setDate,
  setTime,
  setIsOnline,
  setIsFree
} = eventSlice.actions;

export default eventSlice.reducer;
