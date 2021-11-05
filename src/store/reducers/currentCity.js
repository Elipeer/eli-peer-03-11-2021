import { createSlice } from "@reduxjs/toolkit";

export const currentCity = createSlice({
  name: "currentCity",
  initialState: {
    currentCity: { name: "Tel Aviv", id: "215854" }
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setCurrentCity } = currentCity.actions;

export default currentCity.reducer;
