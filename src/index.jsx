import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
// Provider is used to let everything use store if wrapped in it.
import App from "./App";
import "antd/dist/antd.min.css";
import store from "./app/store";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById("root")
);
