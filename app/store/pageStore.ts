import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: "HOME"
};

export const PageStore = createSlice({
    name: "page",
    initialState,
    reducers: {
        changePage: (state, action) => {state.page = action.payload}
    }
});

export const { changePage } = PageStore.actions;
export const getPage = (state: any) => state.PageStore.page;
export default PageStore.reducer;