import React from "react";
import { useSelector } from "react-redux";
import { combineReducers } from "redux";

import { newsReducer } from "./news";

export const rootReducer = combineReducers({
    newsReducer,
});

export const useStore = () => {
    return useSelector((store) => store);
};
