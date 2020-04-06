import React from 'react';
import GenericBg from './GenericBg'
import Info from './Info'
import { Link } from 'react-router-dom'

const portfolio = () => {
    return (
        <div className="portfolio">
            <h1 className='wrapper portfolio--title'>Are You Ready To Be Led Into The Future Of Digital Marketing?</h1>
            <h2 className='wrapper portfolio--subtitle'> Take Your Business To The Next Level And Scale With Me Online.</h2>
            <GenericBg title='portfolio' />
            <Link to="/contact" style={{ textDecoration: 'none' }} >
                <h1 className="portfolio__btn-container">
                    <button style={{ outline: 'none' }} className="wrapper portfolio--btn">I Want To Breakthrough</button>
                </h1>
            </Link>
            <Info />
        </div>
    );
};

export default portfolio;