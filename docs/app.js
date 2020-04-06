import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";
import Router from "./components/Router";

render(
  <Provider>
    <AppContainer>
      <Router />
    </AppContainer>
  </Provider>,
  document.getElementById("react-root")
);

if (module.hot) {
  module.hot.accept("./components/Router", () => {
    const HotRoot = require("./components/Router").default;
    render(
      <AppContainer>
        <HotRoot />
      </AppContainer>,
      document.getElementById("react-root")
    );
  });
}
