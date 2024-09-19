import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum SidebarContentType {
  NAVIGATION = 'navigation',
  FILTERS = 'filters',
}

export interface DialogState {
  showSidebar: boolean;
  content: SidebarContentType
}

export const initialState: DialogState = {
  showSidebar: false,
  content: SidebarContentType.NAVIGATION
};

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setShowSitebar: (state, action: PayloadAction<boolean>) => {
      const status = action.payload;

      if (!status) {
        state.content = SidebarContentType.NAVIGATION;
      }

      state.showSidebar = action.payload;
    },

    setContentType: (state, action: PayloadAction<SidebarContentType>) => {
      state.content = action.payload
    }
  },
});

export const { setShowSitebar, setContentType } = sideBarSlice.actions;

export default sideBarSlice.reducer;
