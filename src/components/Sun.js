import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import ContactForm from './ContactForm'

class Sun extends Component {
    render() {
        return (
            <div className="sun wrapper">
                <div className="sun__four">
                    <h1 className="sun--title">About Me</h1>
                    <h5 className="sun--about">Let me introduce myself... Hey, I'm Taylor. I'm 25 years young. I was born in Jersey, the Channel Island and I lived in Scotland for 10 years as I was growing up. At the age of 19 I was broke, I had no real qualifications other than C's and D's. And that's when I decided to change my life, for good.</h5>
                    <h5 className="sun--about">I decided that I would go back into education and do it properly this time around. I committed to 5 more years in education, and soon realised I had committed to a life time. I have now graduated with a 1:1 Honours Degree in Business Entrepreneurship, I've set up 2 companies and I was President & Founder of the Web Design & Development Society at Falmouth University.</h5>
                    <h5 className="sun--about">I learnt to code in between completing my degree, working part-time, running my business and running the Web Design & Development society. I have an extreme passion for coding, I'm a veracious reader and I love surfing in my spare time. Please do get in touch, I'd really like to hear from you!</h5>
                </div>
                <div className="sun__three sun__three--bg">

                </div>
                <div className="sun__three">
                    <h1 className="sun--title sun--mobile-margin-off">Get in Touch</h1>
                    <ContactForm />
                </div>
            </div>
        );
    }
}

export default hot(module)(Sun);
