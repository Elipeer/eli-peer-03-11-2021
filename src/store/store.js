import { configureStore } from "@reduxjs/toolkit";
import appSettingsReducer from "./reducers/appSettings";
import currentCity from "./reducers/currentCity";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, appSettingsReducer);

export default configureStore({
  reducer: {
    persistedReducer,
    currentCity
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
