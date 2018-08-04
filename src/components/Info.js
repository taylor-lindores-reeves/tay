import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import smile from '../img/smile-icon.svg'
import lightning from '../img/lightning-icon.svg'
import clock from '../img/clock-icon.svg'

class Info extends Component {
    render() {
        return (
            <div className="info">
                <div className="info__inner">
                    <div className="info__container">
                        <div className="info__icon">
                            <img className="info__icon--img" src={smile} alt="" />
                        </div>
                        <div>
                            <h2 className="info--title">Free Consultations</h2>
                        </div>
                    </div>
                    <div className="info__container info__container--middle">
                        <div className="info__icon">
                            <img className="info__icon--img" src={clock} alt="" />
                        </div>
                        <div>
                            <h2 className="info--title">Ongoing Technical Support</h2>
                        </div>
                    </div>
                    <div className="info__container">
                        <div className="info__icon">
                            <img className="info__icon--img" src={lightning} alt="" />
                        </div>
                        <div>
                            <h2 className="info--title">Agile Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Info);