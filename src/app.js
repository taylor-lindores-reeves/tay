import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import App from "./counter";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./counter", () => {
    // if you are using harmony modules ({modules:false})
    render(App);
    // in all other cases - re-require App manually
    render(require("./counter"));
  });
}
