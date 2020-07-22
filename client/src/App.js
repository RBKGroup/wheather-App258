import React from 'react';
import './App.css';
import Registration from './component/registration';
import Login from './component/login';
import App2 from './component/App2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: true });
  render() {
    return (
      <div className="app">
       
        <Router>
          <Switch>
            <Route path="/auth/login">
              <Login setUserAuth={this.setUserAuth} />
            </Route>
            <Route exact path="/auth/reg">
              <Registration setUserAuth={this.setUserAuth} />
            </Route>
            <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/">
           < App2/>
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
              pathname: "/auth/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
