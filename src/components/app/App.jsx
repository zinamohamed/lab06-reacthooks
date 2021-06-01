import React, { Component } from 'react';
import MainPage from '../containers/MainPage';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import DetailPage from '../containers/DetailPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <br/>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <MainPage {...routerProps}/>}
            />
            <Route
              path="/details/:id"
              exact
              render={(routerProps) => <DetailPage {...routerProps}/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
