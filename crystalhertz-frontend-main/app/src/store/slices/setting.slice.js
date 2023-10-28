import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
        setSelectPage: (state, { payload }) => {
            state.selectPage = payload;
            state.currentPage = payload.key;
        },
        /**
         *
         * @param state
         * @param payload
         */
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
            state.selectPage.key = payload;
        },
        /**
         *
         * @param state
         * @param payload
         */
        setAutoMusicVolume: (state, { payload }) => {
            state.autoMusicVolume = payload;
        },
        /**
         *
         * @param state
         */
        setShowObsceneContent: (state) => {
            state.showObsceneContent = !state.showObsceneContent;
        },
        /**
         *
         * @param state
         */
        setSoundNotification: (state) => {
            state.useSoundNotification = !state.useSoundNotification;
        },
        /**
         *
         * @param state
         */
        setSoundUpdateSubscriptions: (state) => {
            state.useSoundUpdateSubscriptions = !state.useSoundUpdateSubscriptions;
        },
    },
});
export const { setSelectPage, setCurrentPage, setAutoMusicVolume, setShowObsceneContent, setSoundNotification, setSoundUpdateSubscriptions, } = settingSlice.actions;
export const selectSettingState = (state) => state.settings;
export default settingSlice.reducer;
