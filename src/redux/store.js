import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

// Example slice
// import counterReducer from "./counterSlice";

const persistConfig = {
  key: "root",        // key for storage
  storage,            // storage engine (localStorage here)
  whitelist: ["counter"], // only persist this slice (you can add more)
};

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
