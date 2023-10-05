// rechange
export * from "./contexts/device.store";

// lib
import { configureStore } from "@reduxjs/toolkit";

// slices - reducers
import appSlice from "./slices/app.slice";
import settingSlice from "./slices/setting.slice";
import sortingSlice from "./slices/sorting.slice";
import musicSlice from "./slices/music.store";

export const store = configureStore({
  reducer: {
    app: appSlice,
    settings: settingSlice,
    sorting: sortingSlice,
    music: musicSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
