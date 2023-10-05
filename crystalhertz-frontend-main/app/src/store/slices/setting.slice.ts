import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SettingState {
  selectPage: SettingButton;
  currentPage: SettingButton["key"];
  autoMusicVolume: number; // 5 | 10 | 15 | 20 ...
  showObsceneContent: boolean;
  useSoundNotification: boolean;
  useSoundUpdateSubscriptions: boolean;
}

const initialState: SettingState = {
  selectPage: {
    key: "settings",
    label: "Настройки",
    isActive: true,
  },
  currentPage: "settings",
  autoMusicVolume: 30,
  showObsceneContent: false,
  useSoundNotification: true,
  useSoundUpdateSubscriptions: true,
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    /**
     *
     * @param state -
     * @param payload -
     */
    setSelectPage: (
      state: SettingState,
      { payload }: { payload: SettingButton }
    ): void => {
      state.selectPage = payload;
      state.currentPage = payload.key;
    },

    /**
     *
     * @param state
     * @param payload
     */
    setCurrentPage: (
      state: SettingState,
      { payload }: { payload: SettingButton["key"] }
    ): void => {
      state.currentPage = payload;
      state.selectPage.key = payload;
    },

    /**
     *
     * @param state
     * @param payload
     */
    setAutoMusicVolume: (
      state: SettingState,
      { payload }: { payload: number }
    ): void => {
      state.autoMusicVolume = payload;
    },

    /**
     *
     * @param state
     */
    setShowObsceneContent: (state: SettingState): void => {
      state.showObsceneContent = !state.showObsceneContent;
    },

    /**
     *
     * @param state
     */
    setSoundNotification: (state: SettingState): void => {
      state.useSoundNotification = !state.useSoundNotification;
    },

    /**
     *
     * @param state
     */
    setSoundUpdateSubscriptions: (state: SettingState): void => {
      state.useSoundUpdateSubscriptions = !state.useSoundUpdateSubscriptions;
    },
  },
});

export const {
  setSelectPage,
  setCurrentPage,
  setAutoMusicVolume,
  setShowObsceneContent,
  setSoundNotification,
  setSoundUpdateSubscriptions,
} = settingSlice.actions;

export const selectSettingState = (state: RootState) => state.settings;

export default settingSlice.reducer;
