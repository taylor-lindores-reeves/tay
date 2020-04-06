import React, { Component } from 'react';

class GenericBg extends Component {
    render() {
        return (
            <div className={this.props.title}>
                <div className={this.props.title + "__bg"}>

                </div>
            </div>
        );
    }
}

export default GenericBg;