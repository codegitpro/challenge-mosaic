import { Dispatch } from "redux";

export const NewsActionType = {
    LOAD_DATA: "LOAD_NEWS_DATA",
};

export const NewsAction = {
    setAgreement: (news) => {
        return async (dispatch) => {
            dispatch({ type: NewsActionType.LOAD_DATA, payload: { data: news } });
        };
    },
};
