import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";

if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "function") {
    window.__REDUX_DEVTOOLS_EXTENSION__ = (_) => (next) => (action) => next(action);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));
