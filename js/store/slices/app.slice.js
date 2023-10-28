import { createSlice } from "@reduxjs/toolkit";
const currentPageDataObject = JSON.parse(localStorage.getItem("last_page"));
const initialState = {
    leftBar: {
        isOpen: false,
    },
    currentPageData: {
        key: currentPageDataObject?.key,
        label: currentPageDataObject?.label,
        status: currentPageDataObject?.status,
    },
};
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        /**
         *
         * @param state - @interface State
         */
        setBarIsOpen: (state) => {
            state.leftBar.isOpen = !state.leftBar.isOpen;
        },
        setResetInfo: (state) => {
            state = initialState;
            localStorage.clear();
            return state;
        },
        /**
         *
         * @param state - @interface State
         * @param payload - @interface CurrentPage
         */
        setSelectedPage: (state, { payload }) => {
            state.currentPageData = payload;
            localStorage.setItem("last_page", JSON.stringify(state.currentPageData));
        },
    },
});
export const { setBarIsOpen, setSelectedPage, setResetInfo } = appSlice.actions;
export const selectAppState = (state) => state.app;
export default appSlice.reducer;
