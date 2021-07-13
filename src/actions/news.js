import { BackendServices } from "../services";

export const NewsActionType = {
    IS_LOADING: "IS_LOADING",
    SET_DATA: "SET_NEWS_DATA",
    SET_ERROR: "SET_NEWS_ERROR",
};

export const NewsAction = {
    fetchNewsData: (query, amount) => {
        return async (dispatch) => {
            try {
                const res = await BackendServices.fetchNews(query, amount);
                const newsData = res?.articles;
                console.log("newsData", newsData);
                if (newsData?.length) {
                    dispatch({
                        type: NewsActionType.SET_DATA,
                        payload: { data: newsData },
                    });
                }
            } catch (error) {
                console.error("fetchNewsData Error", error.message);
            }
        };
    },
};
