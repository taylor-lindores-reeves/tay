import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import Header from './Header'
import Grid from './Grid'
import Drawer from './Drawer'
import PortfolioInner from './PortfolioInner'

class Portfolio extends Component {
    render() {
        return (
            <div className="main-background">
                <Drawer />
                <div onClick={this.props.clickOutsideHandler}>
                    <Header />
                    <PortfolioInner />
                    <Grid />
                </div>
            </div>
        );
    }
}


export default hot(module)(Portfolio);
