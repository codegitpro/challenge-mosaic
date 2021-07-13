import React from "react";
import { Link } from "react-router-dom";

import { QueryHook } from "../../../hooks";
import { ROUTES } from "../../../constants";
import { ArrayUtil } from "../../../utils";

import "./SearchInput.css";

export const SearchInput = (props) => {
    const query = QueryHook.getQuery();
    const [goTo] = QueryHook.useRouteWithQuery();
    const [keyword, setKeyword] = React.useState("");

    const handleChange = React.useCallback((e) => {
        const value = e.target?.value;
        if (value) {
            setKeyword(value);
        }
    }, []);

    const handleSubmit = React.useCallback(() => {
        goTo(ROUTES.SEARCH, { ...query, keyword });
    }, [keyword]);

    return (
        <div className="search-input-wrapper">
            <input className="search-input" type="text" val={keyword} onChange={handleChange} />
            <button className="submit" onClick={handleSubmit}>
                Search
            </button>
        </div>
    );
};
