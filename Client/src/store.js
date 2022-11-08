import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import LazyLoadSlice from "./components/LazyLoader/LazyLoad.slice";
const reducer = combineReducers({
    LazyLoad: LazyLoadSlice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;