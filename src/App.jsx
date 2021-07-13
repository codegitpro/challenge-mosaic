import { ThemeProvider } from "@material-ui/core/styles";
import { themes } from "@this/config";
import { GlobalLoading } from "@this/global";
import { GoogleAnalyticsHook } from "@this/hooks";
import { GraphQL } from "@this/lib";
import { useStore } from "@this/reducers";
import { cloneDeep } from "lodash";
import React from "react";

import { Router } from "./Router";

export const App = React.memo(() => {
    const settings = useStore().settings;
    GoogleAnalyticsHook.setup();

    return (
        <ThemeProvider theme={cloneDeep(themes[settings.theme])}>
            <GraphQL></GraphQL>
            <GlobalLoading />
        </ThemeProvider>
    );
});
