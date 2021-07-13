import React from "react";
// import { Link } from "react-router-dom";

import "./Card.css";

export const Card = (props) => {
    return (
        <a className="news-card" href={props.url} target="_blank">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <span className="author">{props.author}</span>
        </a>
    );
};
