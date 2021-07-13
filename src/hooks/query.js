/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { cloneDeep } from "lodash";

import { TextUtil } from "../utils";

export const QueryHook = {
    getQuery: () => {
        const location = useLocation();

        return location?.search ? TextUtil.decodeURI(location.search.substring(1)) : {};
    },
    useRouteWithQuery: () => {
        const history = useHistory();

        const goTo = (route, query) => {
            const search = new URLSearchParams(query);
            history.push(`${route}?${search.toString()}`);
        };

        return [goTo];
    },
};
