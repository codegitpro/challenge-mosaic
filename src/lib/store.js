import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";

const initialState = {};
const middleware = [thunk];

let enhancer;
// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    // @ts-ignore
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(...middleware));
} else {
    enhancer = compose(applyMiddleware(...middleware));
}

export const store = createStore(rootReducer, initialState, enhancer);
