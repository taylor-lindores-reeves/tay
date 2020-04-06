import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { MyContext } from './Provider'

class NavButton extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <div onClick={context.handleClick} className="nav wrapper">
                        <div className={context.state.open ? "hamburger hamburger--arrowturn is-active" : "hamburger hamburger--arrowturn"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default hot(module)(NavButton);