import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: "",
    soundSrc: "",
    artistName: "",
    title: "",
    albumName: "",
    description: "",
    dateRelease: "",
    isSelected: false,
};
const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        setSelectedTrack: (state, { payload }) => {
            state = payload;
            return state;
        },
    },
});
export const { setSelectedTrack } = musicSlice.actions;
export const selectMusicState = (state) => state.music;
export default musicSlice.reducer;
