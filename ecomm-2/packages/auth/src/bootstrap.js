import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (element, { onNavigate, defaultHistory }) => {
    // Use Browser history for local development
    const history = defaultHistory || createMemoryHistory();

    // Update browser history when memory history changes
    history.listen(onNavigate);

    ReactDOM.render(<App history={history} />, element);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            console.log("Triggered navigation callback in Container MFE");

            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        },
    };
};

if (process.env.NODE_ENV === "development") {
    const devElement = document.querySelector("#_auth-dev-root");

    if (devElement) {
        mount(devElement, { defaultHistory: createBrowserHistory });
    }
}

export { mount };
