import React from 'react';
import axios from 'axios';

import { Link, withRouter } from 'react-router-dom';
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handelSubmite(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    axios
      .post(`http://localhost:5000/register`, {
        username,
        email,
        password,
      })
      .then(response => {
        console.log(response)
        if (response.data) {
          console.log('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.setUserAuth(true);
          alert('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.history.push('/auth/login');
        } 
      })
      .catch(error => {
        console.log('registration error', error);
        alert('THIS USERNAME IS ALREADY USED TRY ANOTHER ONE');
        this.props.setUserAuth(false);
        this.setState({
          username:''
        })
      });
  }

  render() {
    return (
      <div className='inner-container'>
        <div class='h1'>
          <h1>Weather App</h1>
        </div>
        <form onSubmit={this.handelSubmite.bind(this)} className='box'>
          <h1 className='header'>Account Sign Up</h1>
          <hr class='hr' />
          <br />
          <div className='input-group'>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handelChange.bind(this)}
              className='login-input'
              placeholder='Username'
            />
          </div>
          <br />

          <div className='input-group'>
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handelChange.bind(this)}
              className='login-input'
              placeholder='Email'
            />
          </div>
          <br />

          <div className='input-group'>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handelChange.bind(this)}
              className='login-input'
              placeholder='Password'
            />
          </div>
          <br />
          <button class='btn'>SignUp</button>
          <br />
          <p>
            you have alredy account !{' '}
            <Link to='/auth/login' class='link'>
              {' '}
              login now
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);
