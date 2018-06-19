import { AppContainer } from "react-hot-loader"
import React from "react"
import { render } from "react-dom"
import Router from "./components/Router";
const root = document.getElementById("react-root");

render(
  <AppContainer>
    <Router />
  </AppContainer>,
  root
)



if (module.hot) {
  module.hot.accept("./components/Router", () => {
    const HotRoot = require('./components/Router').default
    render(
      <AppContainer>
        <HotRoot />
      </AppContainer>,
      root
    )
  })
}