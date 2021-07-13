import axios from "axios";

const BackendInstance = axios.create({
    baseURL: process.env.REACT_APP_NEWS_API_URL,
    headers: {
        "Content-Type": "application/json",
        common: {
            Authorization: process.env.REACT_APP_NEWS_API_KEY,
        },
    },
});

const PATH = {
    FETCH_NEWS: "/everything",
};

export const BackendServices = {
    fetchNews: async (query, amount) => {
        try {
            const search = new URLSearchParams({ q: query, pageSize: amount });
            const apiEndpointWithQuery = `${PATH.FETCH_NEWS}?${search.toString()}`;
            const res = await BackendInstance.get(apiEndpointWithQuery);
            return res?.data;
        } catch (error) {
            throw error?.response?.data;
        }
    },
};
