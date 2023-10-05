import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const currentPageDataObject = JSON.parse(
  localStorage.getItem("last_page") as string
);

interface State {
  leftBar: {
    isOpen: boolean;
  };

  currentPageData: CurrentPage;
}

const initialState: State = {
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
    setBarIsOpen: (state: State) => {
      state.leftBar.isOpen = !state.leftBar.isOpen;
    },

    setResetInfo: (state: State) => {
      state = initialState;
      localStorage.clear();

      return state;
    },

    /**
     *
     * @param state - @interface State
     * @param payload - @interface CurrentPage
     */
    setSelectedPage: (state: State, { payload }: { payload: CurrentPage }) => {
      state.currentPageData = payload;
      localStorage.setItem("last_page", JSON.stringify(state.currentPageData));
    },
  },
});

export const { setBarIsOpen, setSelectedPage, setResetInfo } = appSlice.actions;

export const selectAppState = (state: RootState) => state.app;

export default appSlice.reducer;
