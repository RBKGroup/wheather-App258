import React from "react";
import axios from "axios";
//import "./register.css";
import { Link, withRouter } from "react-router-dom";
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
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
    .post(`http://localhost:5000/register`,
      {
        username, email, password 
      },
    )
    .then((response) => {
        if (response.data=== "created") {
        console.log("NOW LOGIN TO CONFIRM YOUR  ACCOUNT")
          this.props.setUserAuth(true)
          this.props.history.push("/auth/login");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
        this.props.setUserAuth(false)
      });
  }

  render() {
    return (
      <div className="inner-container">
        <form onSubmit={this.handelSubmite.bind(this)} className="box">
          <h1 className="header">Sign Up</h1>
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Username"
            />
          </div>
          <br />

          <div className="input-group">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Email"
            />
          </div>
          <br />

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <br />
          <button class="btn">SignUp</button>
          <Link to="/auth/login"> login now</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Registration);