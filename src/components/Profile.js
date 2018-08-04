import React, { Component } from 'react';
import { hot } from "react-hot-loader";

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile__inner wrapper section">
                    <div className="profile__picture-container">
                    </div>
                    <div className="profile__text-content">
                        <div className="profile__text-content-inner">
                            <h1 className="profile__text-content--title">Hello, I am Taylor Lindores-Reeves. A Full-stack Web Developer from Jersey.</h1>
                            <div className="profile__quote-container">
                                <blockquote className="profile__quote-container--quote">“Creation is a better means of self-expression than possession. It is through creating, not possessing, that life is revealed.”</blockquote>
                                <p className="profile__quote-container--name">- Vida D. Scudder, The Life of the Spirit in the Modern English Poets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Profile);