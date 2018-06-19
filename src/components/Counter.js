import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                <h1 className="profile__title">counter: {this.state.count}</h1>
                <Link to="/linked">Send me to linked!</Link>
                <img className="profile__img" alt="" width="200" />
            </div>
        );
    }
}

export default Counter