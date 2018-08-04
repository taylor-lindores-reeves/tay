import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { hot } from "react-hot-loader";
import { MyContext } from './Provider';
import home from '../img/home.svg'
import envelope from '../img/envelope.svg'
import portfolio from '../img/portfolio.svg'

class DrawerContainer extends Component {
    render() {
        return (
            <div className="drawer__inner">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <div className="drawer__inner-item">
                                <Link onClick={context.handleClickOutside} className="drawer__inner-item--title" to="/"><img src={home} alt="" width="100px" /><h1>Home</h1></Link>
                            </div>
                            <div className="drawer__inner-item">
                                <Link onClick={context.handleClickOutside} className="drawer__inner-item--title" to="/portfolio"><img src={portfolio} alt="" width="100px" /><h1>Portfolio</h1></Link>
                            </div>
                            <div className="drawer__inner-item">
                                <Link onClick={context.handleClickOutside} className="drawer__inner-item--title" to="/contact"><img src={envelope} alt="" width="100px" /> <h1>Contact</h1></Link>
                            </div>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default hot(module)(DrawerContainer);