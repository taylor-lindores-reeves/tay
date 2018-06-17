import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  climb() {
    this.setState({
      // always setState to change state
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div onClick={this.climb.bind(this)}>
        <h1>countesr: {this.state.count}</h1>
      </div>
    );
    r;
  }
}

export default hot(module)(App);
