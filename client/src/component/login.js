import React from "react";
// import cors from 'cors'
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
// import Weathers from "./search"
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     username: "",
      password: "",
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
            username:username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        if (response.data===true) {
     this.props.setUserAuth(true);
    this.props.history.push("/auth/Weathers");
      }
    })
    .catch((error) => {
      console.log("login error", error);
      this.props.setUserAuth(false)
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
          <Link to="/auth/reg"> register now</Link>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);