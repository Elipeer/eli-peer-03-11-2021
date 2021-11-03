import { createSlice } from "@reduxjs/toolkit";

export const appSettings = createSlice({
  name: "appSettings",
  initialState: {
    loaderOn: false,
    locations: []
  },
  reducers: {
    setLoaderOn: (state) => {
      state.loaderOn = true;
    },
    setLoaderOff: (state) => {
      state.loaderOn = false;
    },
    setLocations: (state, action) => {
      state.locations = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setLoaderOn, setLoaderOff, setLocations } = appSettings.actions;

export default appSettings.reducer;
