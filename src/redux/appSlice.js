import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidePanelOpen: true,
    searchSuggestionsClickResults: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidePanelOpen = !state.isSidePanelOpen;
    },
    closeMenu: (state, action) => {
      state.isSidePanelOpen = action.payload;
    },
    addSearchSuggestionsClickResults: (state, action) => {
      state.searchSuggestionsClickResults = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu,addSearchSuggestionsClickResults } = appSlice.actions;

export default appSlice.reducer;
