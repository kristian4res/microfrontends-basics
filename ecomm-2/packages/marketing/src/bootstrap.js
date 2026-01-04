import React from "react";
import ReactDOM from "react-dom";


const mount = (element) => {
    ReactDOM.render(
        <h1>Marketing component</h1>,
        element
    );
};

if (process.env.NODE_ENV === "development") {
    const devElement = document.querySelector("#_marketing-dev-root");
    
    if (devElement) {
        mount(devElement);
    }
}

export { mount };