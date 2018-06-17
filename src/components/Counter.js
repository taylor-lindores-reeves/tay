import React, { Component } from 'react'
import hi from "../img/hi.jpg";

class Counter extends Component {
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
            <div onClick={this.climb.bind(this)} className="profile">
                <h1 className="profile__title">count: {this.state.count}</h1>
                <img className="profile__img" src={hi} alt="" width="200" />
            </div>
        );
    }
}

export default Counter;
