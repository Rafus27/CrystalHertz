import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const initialState: Music = {
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
    setSelectedTrack: (state: Music, { payload }: { payload: Music }) => {
      state = payload;

      return state;
    },
  },
});

export const { setSelectedTrack } = musicSlice.actions;

export const selectMusicState = (state: RootState) => state.music;

export default musicSlice.reducer;
