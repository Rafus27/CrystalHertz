import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: Sort = {
  key: "listen",
  label: "Прослушивания",
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSelectedSortParams: (
      state: Sort,
      { payload }: { payload: Sort }
    ): Sort => {
      state = { ...payload };

      return state;
    },
  },
});

export const { setSelectedSortParams } = sortingSlice.actions;

export const selectSortState = (state: RootState) => state.sorting;

export default sortingSlice.reducer;
