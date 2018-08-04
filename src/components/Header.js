import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import Vivus from 'vivus'
import tay from '../img/tay.svg'
import { Link } from 'react-router-dom'

class Header extends Component {
    componentDidMount() {
        this.el = document.querySelector('#vivus')
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            const myCallback = (myVivus) => {
                this.el.classList.add('finished')
                setTimeout(() => (
                    myVivus.play(-1)
                ), 2000)
            };

            new Vivus('vivus', {
                file: tay,
                type: "sync",
                duration: 100,
                animTimingFunction: Vivus.EASE_IN
            }, myCallback);

        } else {
            new Vivus('vivus', {
                file: tay
            });
            this.el.classList.add('finished')
        }


    }

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <div id='vivus' className="header__title wrapper"></div>
                </Link>
            </div>
        )
    }
}

export default hot(module)(Header);