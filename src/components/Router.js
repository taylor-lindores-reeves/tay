import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Counter from './Counter'
import Linked from './Linked'
import { hot } from "react-hot-loader";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Counter}></Route>
            <Route path="/linked" component={Linked}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(Router);