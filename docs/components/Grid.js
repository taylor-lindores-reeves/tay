import React, { Component } from 'react';
import { hot } from "react-hot-loader";

class Grid extends Component {
    render() {
        return (
            <div className="grid wrapper">
                <div className="post grid__item-a">
                    <div className="grid__tags">Node, Git, GitHub, Webpack, Gulp, NPM, BEM, OOJS, ES6</div>
                    <div className="grid__date">14 May 2017</div>
                    <h3><a href="https://leafyshark.github.io/travel-site/" target="_blank" className="grid__heading">Travel Site</a></h3>
                    <div className="company">
                        <img src="" />
                        <div className="company--info">Learning Resource</div>
                        <div className="company--name"><a className="company--link" href="https://www.udemy.com/git-a-web-developer-job-mastering-the-modern-workflow/" target="_blank">Git a Web Developer Job | Udemy</a></div>
                        <div className="company--title"><a className="company--link" href="https://learnwebcode.com/" target="_blank">Brad Schiff, Web Developer</a></div>
                    </div>
                    <div className="grid__bg grid__bg--center"></div>
                </div>
                <div className="post grid__item-b">
                    <div className="grid__tags">Vanilla JS, ES6, HTML, CSS</div>
                    <div className="grid__date">18 Feb 2018</div>
                    <h3><a href="https://blood-alcohol-calculator.herokuapp.com/" target="_blank" className="grid__heading">Blood Alcohol Calculator</a></h3>
                    <div className="company">
                        <img src="" />
                        <div className="company--info">Learning Resource</div>
                        <div className="company--name"><a className="company--link" href="https://www.amazon.co.uk/Exercises-Programmers-Challenges-Develop-Coding/dp/1680501224" target="_blank">57 Exercises For Programmers</a></div>
                        <div className="company--title"><a className="company--link" href="https://bphogan.com/" target="_blank">Brian P. Hogan, Web Developer</a></div>
                    </div>
                    <div className="grid__bg grid__bg--center"></div>
                </div>
                <div className="post post__main grid__item-c">
                    <h1 className="grid__heading grid__heading--main">Websites I've Built</h1>
                </div>
                <div className="post grid__item-d">
                    <div className="grid__tags">Node, Express, React</div>
                    <div className="grid__date">Still In Development!</div>
                    <h3><a href="#" className="grid__heading">Campus Exchange</a></h3>
                    <div className="company">
                        <img src="" />
                        <div className="company--info">Personal Project</div>
                        <div className="company--name">The Campus Exchange</div>
                        <div className="company--title">Me</div>
                    </div>
                    <div className="grid__bg grid__bg--center"></div>
                </div>
                <div className="post grid__item-e">
                    <div className="grid__tags">PHP, WordPress</div>
                    <div className="grid__date">24 Apr 2018</div>
                    <h3><a href="https://www.zambonfitness.com/" target="_blank" className="grid__heading">Zambon Fitness</a></h3>
                    <div className="company">
                        <img src="" />
                        <div className="company--info">Client Work</div>
                        <div className="company--name">Zambon Fitness Jersey</div>
                        <div className="company--title">Me</div>
                    </div>
                    <div className="grid__bg grid__bg--center"></div>
                </div>
                <div className="post grid__item-f">
                    <div className="grid__tags">PHP, WordPress, JS, CSS, HTML</div>
                    <div className="grid__date">11 Jun 2018</div>
                    <h3><a href="https://islanderplan.gg/" target="_blank" className="grid__heading">Islander Plan</a></h3>
                    <div className="company">
                        <img src="" />
                        <div className="company--info">Client Work</div>
                        <div className="company--name">Airtel Vodafone Jersey</div>
                        <div className="company--title">Me & Jack Mackenzie</div>
                    </div>
                    <div className="grid__bg grid__bg--center"></div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Grid);