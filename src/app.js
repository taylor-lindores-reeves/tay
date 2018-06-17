import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Router from "./components/Router";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render(Router);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/Router", () => {
    // if you are using harmony modules ({modules:false})
    render(Router);
    // in all other cases - re-require Router manually
    render(require("./components/Router"));
  });
}