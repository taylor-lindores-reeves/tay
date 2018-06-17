import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from "react-hot-loader";
import Counter from './Counter'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Counter} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(module)(Router);
