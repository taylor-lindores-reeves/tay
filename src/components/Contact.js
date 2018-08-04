import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Sun from './Sun'
import Drawer from './Drawer'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component {
    render() {
        return (
            <div className="main-background">
                <Drawer />
                <div onClick={this.props.clickOutsideHandler}>
                    <Header />
                    <Sun />
                </div>
                <Footer />
            </div>
        );
    }
}

export default hot(module)(Contact)