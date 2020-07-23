import React from 'react';
import '../App.css';
import Weathers from './search';
import About from './about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: true });
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth/Weathers'>
              <Weathers />
            </Route>
            <Route exact path='/auth/About'>
              <About />
            </Route>
            <PrivateRoute isAuthenticated={this.state.isAuthenticated} path='/'>
              <Weathers />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}
function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App2;
