import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DialogState {
  showDialog: boolean;
}

export const initialState: DialogState = {
  showDialog: false,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setShowDialog: (state, action: PayloadAction<boolean>) => {
      state.showDialog = action.payload;
    },
  },
});

export const { setShowDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
