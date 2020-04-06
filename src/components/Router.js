import React, { Component } from "react"
import { HashRouter, Switch, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import { hot } from "react-hot-loader";
import universal from 'react-universal-component'
import NavButton from './NavButton'
import MyProvider, { MyContext } from './Provider'
const UniversalComponent = universal(props => import(`./${props.page}`))

WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'Fjalla One:300,400,700', 'Esteban:300,400,700', 'Open Sans:300,400,700']
  }
});

class Router extends Component {
  render() {
    return (
      <MyProvider>
        <NavButton />
        <MyContext.Consumer>
          {(context) => (
            <HashRouter>
              <Switch>
                <Route exact path="/">
                  <UniversalComponent page="Hero" clickOutsideHandler={context.handleClickOutside} />
                </Route>
                <Route path="/portfolio">
                  <UniversalComponent page="Portfolio" clickOutsideHandler={context.handleClickOutside} />
                </Route>
                <Route path="/contact">
                  <UniversalComponent page="Contact" clickOutsideHandler={context.handleClickOutside} />
                </Route>
              </Switch>
            </HashRouter>
          )}
        </MyContext.Consumer >
      </MyProvider>
    )
  }
}

export default hot(module)(Router);