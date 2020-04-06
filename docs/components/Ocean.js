import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import phone from '../img/phone.png'
import Typing from 'react-typing-animation';
import Net from './Net'
import image from '../img/kaleidascope.svg'

class Ocean extends Component {
    render() {
        return (
            <div className="ocean">
                <div className="ocean__flex">
                    <img src={phone} alt="" className="ocean__phone" />
                    <div className="ocean__text-content">
                        <h1>I create
                            <Typing key='a' loop={true}>
                                <span>fast, responsive web applications.</span>
                                <Typing.Backspace key='c' count={43} delay={2000} />
                                <span>bespoke applications using the latest tools.</span>
                                <Typing.Backspace key='e' count={47} delay={2000} />
                                <span>visually appealing and modern web designs.</span>
                                <Typing.Backspace key='g' count={40} delay={2000} />
                            </Typing>
                        </h1>
                    </div>
                </div>
                <div className="ocean__text-content--mobile">
                    <img src={image} alt="" width='100%' />
                </div>
                <Net></Net>
            </div>
        );
    }
}

export default hot(module)(Ocean);