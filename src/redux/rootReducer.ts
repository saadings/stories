import { combineReducers } from "@reduxjs/toolkit";
import storiesReducer from "./stories/storiesSlice";

export const rootReducer = combineReducers({
  storiesReducer
});