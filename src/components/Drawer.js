import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import DrawerContainer from './DrawerContainer'
import { MyContext } from './Provider'
import { hot } from 'react-hot-loader';

class Drawer extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <Motion style={{ x: spring(context.state.open ? 25 : 0), y: spring(context.state.open ? 1 : 0) }}>
                        {({ x, y }) =>
                            <div className="drawer" style={{
                                width: `${x}vw`,
                                opacity: `${y}`,
                                visibility: `${context.state.open ? 'visible' : 'hidden'}`,
                            }}>
                                <DrawerContainer />
                            </div>
                        }
                    </Motion>
                )}
            </MyContext.Consumer >
        )
    }
};

export default hot(module)(Drawer);
