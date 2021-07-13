import React from "react";
import { useDispatch } from "react-redux";

import { AppLayout } from "../../components";
import { NewsAction } from "../../actions";
import { useStore } from "../../reducers";

import "./Home.css";

export const HomePage = () => {
    const dispatch = useDispatch();
    const news = useStore().news;

    React.useEffect(() => {
        dispatch(NewsAction.fetchNewsData("", ""));
    }, []);

    console.log("news", news);
    return (
        <AppLayout className="home-page">
            <div className="main">Home Page</div>
        </AppLayout>
    );
};
