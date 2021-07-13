import React from "react";
import cx from "classnames";

import "./AppLayout.css";

export const AppLayout = (props) => {
    return <div className={cx("app-layout", props.className || "")}>{props.children}</div>;
};
