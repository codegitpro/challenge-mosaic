import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages";
import { ROUTES, ROUTES_DEFAULT } from "./constants";
import { QueryHook } from "./hooks";

export const Router = React.memo(() => (
    <BrowserRouter>
        <Switch>
            {/* PUBLIC */}
            <Route exact path={ROUTES.DIALS_1_FORM} component={HomePage} />

            {/*  */}
            <Redirect to={ROUTES_DEFAULT.NOT_FOUND} />
        </Switch>
    </BrowserRouter>
));
