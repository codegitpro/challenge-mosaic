import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages";
import { ROUTES } from "./constants";

export const Router = React.memo(() => (
    <BrowserRouter>
        <Switch>
            {/* PUBLIC */}
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.SEARCH} component={HomePage} />

            {/*  */}
            <Redirect to={ROUTES.NOT_FOUND} />
        </Switch>
    </BrowserRouter>
));
