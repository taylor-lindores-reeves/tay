import React from 'react'
import { hot } from "react-hot-loader";
import Header from './Header'
import Ocean from './Ocean'
import Profile from './Profile'
import Drawer from './Drawer'

class Hero extends React.Component {
    render() {
        return (
            <div className='main-background'>
                <Drawer />
                <div onClick={this.props.clickOutsideHandler}>
                    <Header />
                    <Ocean />
                    <Profile />
                </div>
            </div>
        );
    }
}


export default hot(module)(Hero);