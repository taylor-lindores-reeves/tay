import React, { Component } from 'react';
export const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        open: false
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                handleClick: () => {
                    this.setState({
                        open: !this.state.open,
                    });

                },
                handleClickOutside: () => {
                    this.setState({
                        open: false,
                    });
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider