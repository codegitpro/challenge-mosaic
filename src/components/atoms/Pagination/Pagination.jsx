import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants";
import { QueryHook } from "../../../hooks";
import { ArrayUtil } from "../../../utils";

import "./Pagination.css";

export const Pagination = (props) => {
    const query = QueryHook.getQuery();
    const [goTo] = QueryHook.useRouteWithQuery();

    const pageNumData = React.useMemo(() => ArrayUtil.range(0, props.total), [props.total]);

    const handleClick = React.useCallback(
        (pageNum) => () => {
            goTo(ROUTES.SEARCH, { ...query, pageNum });
        },
        [query],
    );

    return (
        <div className="pagination">
            {pageNumData.map((val, index) => (
                <span key={`${val}-${index}`} className="item" onClick={handleClick(val)}>
                    {val}
                </span>
            ))}
        </div>
    );
};
