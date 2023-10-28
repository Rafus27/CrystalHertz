import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    key: "listen",
    label: "Прослушивания",
};
const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSelectedSortParams: (state, { payload }) => {
            state = { ...payload };
            return state;
        },
    },
});
export const { setSelectedSortParams } = sortingSlice.actions;
export const selectSortState = (state) => state.sorting;
export default sortingSlice.reducer;
