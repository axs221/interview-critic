import React from 'react';
import { render } from 'react-dom';
import { Router, Link, Route, hashHistory } from 'react-router';

import Login from './components/Login.js';
import styles from '../css/main.css';

let App = React.createClass({
  
  render() {
    console.log(styles);
    return (
      <div>
        <div className={styles.nav}>
          foo
        </div>
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

let Welcome = React.createClass({
  render() {
    return (
      <div>Hi!</div>
    );
  }
});

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />

      <Route path="*" component={Welcome} />
    </Route>
  </Router>
), document.getElementById('root'));
