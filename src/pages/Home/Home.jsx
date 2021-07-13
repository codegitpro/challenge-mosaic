import React from "react";
import { useDispatch } from "react-redux";

import { AppLayout, Card, Pagination, SearchInput } from "../../components";
import { NewsAction } from "../../actions";
import { useStore } from "../../reducers";

import "./Home.css";

export const HomePage = () => {
    const dispatch = useDispatch();
    const newsData = useStore().news.data;

    React.useEffect(() => {
        dispatch(NewsAction.fetchNewsData("sports", 10));
    }, [dispatch]);

    return (
        <AppLayout className="home-page">
            <h1>New Articles</h1>
            <SearchInput />
            <div className="content">
                {newsData?.map((item, index) => (
                    <Card key={`${item.title}-${index}`} title={item.title} content={item.content} author={item.author} url={item.url} />
                ))}
            </div>
            {newsData?.length ? <Pagination total={10} /> : null}
        </AppLayout>
    );
};
