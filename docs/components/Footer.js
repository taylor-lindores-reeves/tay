import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h6 className="footer--copyright">© 2018 Taylor Lindores-Reeves</h6>
            </div>
        );
    }
}

export default hot(module)(Footer);