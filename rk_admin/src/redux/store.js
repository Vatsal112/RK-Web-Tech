import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const store = configureStore({
  reducer: { app: persistedReducer },
});

export const persistor = persistStore(store);
