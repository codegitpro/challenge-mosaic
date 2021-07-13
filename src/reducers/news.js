import { NewsActionType } from "../actions";
import { cloneDeep } from "lodash";

const initialState = {
    data: undefined,
};

export const newsReducer = (state, action) => {
    const next = cloneDeep(state || initialState);
    switch (action.type) {
        case NewsActionType.SET_DATA:
            console.log("action.payload", action.payload);
            next.data = action.payload.data;
            break;
    }
    return next;
};
