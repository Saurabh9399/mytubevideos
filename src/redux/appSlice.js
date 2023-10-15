import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidePanelOpen: true
    },
    reducers:{  
        toggleMenu: (state) => {
                state.isSidePanelOpen=!state.isSidePanelOpen
        }
    }
})


export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;