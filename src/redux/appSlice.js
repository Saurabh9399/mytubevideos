import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidePanelOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidePanelOpen = !state.isSidePanelOpen;
    },
    closeMenu: (state, action) => {
      state.isSidePanelOpen = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
