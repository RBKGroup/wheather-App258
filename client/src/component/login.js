import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { username, password } = this.state;

    axios
      .get(
        `http://localhost:5000/login/${this.state.username}/${this.state.password}`,
        {
          user: {
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        if (response.data === true) {
          this.props.setUserAuth(true);
          this.props.history.push('/auth/Weathers');
        }
      })
      .catch((error) => {
        console.log('login error', error);
        this.props.setUserAuth(false);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div class='inner-container'>
        <div class='h1'>
          <h1 class='h'> Weather App</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <h1 class='header'>Account Login</h1>
          <hr class='hr' />
          <input
            class='login-input'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            class='login-input'
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />

          <button type='submit' class='btn'>
            Login
          </button>
          <p>
            Dont have an account ?{' '}
            <Link to='/auth/reg' class='link'>
              {' '}
              register now
            </Link>{' '}
          </p>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
