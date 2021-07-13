import { Dispatch } from "redux";

import { BackendServices } from "../services";

export const NewsActionType = {
    LOAD_DATA: "LOAD_NEWS_DATA",
};

export const NewsAction = {
    fetchNewsData: (query, pageSize) => {
        return async (dispatch) => {
            try {
                dispatch({ type: NewsActionType.LOAD_DATA });
                const newsData = await BackendServices.fetchNews(query, pageSize);
                if (newsData?.length) {
                    dispatch({
                        type: NewsActionType.LOAD_DATA,
                        payload: { data: newsData },
                    });
                }
            } catch (error) {
                console.log("error", error.message);
            }
        };
    },
};
