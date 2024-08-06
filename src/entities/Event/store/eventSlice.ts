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
  description: string;
  phone: number | null;
  email: string;
  instagram: string;
  telegram: string;
  facebook: string;
}

export const initialState: EventState = {
  eventImages: [],
  title: '',
  category: '',
  subCategory: '',
  address: '',
  price: '',
  date: '',
  time: '',
  isOnline: false,
  isFree: false,
  description: '',
  phone: null,
  email: '',
  instagram: '',
  telegram: '',
  facebook: '',
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
    updateProperty: (
      state,
      action: PayloadAction<{
        field: keyof EventState;
        value: string | boolean | number;
      }>
    ) => {
      state[action.payload.field] = action.payload.value as never;
    },
  },
});

export const {
  setImage,
  removeImage,
  updateProperty,
  // setTitle,
  // setCategory,
  // setSubCategory,
  // setAddress,
  // setPrice,
  // setDate,
  // setTime,
  // setIsOnline,
  // setIsFree,
  // setDescription,
  // setPhone,
  // setEmail,
  // setInstagram,
  // setTelegram,
  // setFacebook,
} = eventSlice.actions;

export default eventSlice.reducer;
