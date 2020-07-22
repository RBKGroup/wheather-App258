import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      country: '',
      subject: ''
    }
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handelSubmite(e) {
    e.preventDefault();
    const { firstname, lastname, country, subject } = this.state;
    axios
      .post(`http://localhost:5000/massages`, {
        firstname,
        lastname,
        country,
        subject
      })
      .then(response => {
        console.log(response)
        if (response.data == 'sent') {
          alert('The massage sent Wowww :) ');
          this.setState({
            firstname: '',
            lastname: '',
            country: '',
            subject: ''
          })
        }
      })
      .catch(error => {
        console.log('registration error', error);
        alert('Your massage did not reseved');
      });
  }
 

  render() {
    return (
      <div>
        <div class='nav'>
          <header class='h2'>
            <h2>Weather app</h2>
            <br />
            <nav>
              <ul class='links'>
                <li>
                  <Link to='/auth/Weathers'>HOME</Link>
                </li>
                
                <li>
                  <Link to='/auth/About' class='right'>
                    ABOUT
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <div>
          <h3>About Us</h3>
          <p> Weather App . . <br /> one of the best weather apps in the web, and one of the best pick fore for you.
          Weather App, which contains accurate weather information anytime and anywhere.
          Local weather forecast, rain reports, storms, ice and snow in real time ...<br />
            With weather information, you can prepare your plan carefully, you will be successful at work and have a better life. The application is very useful with everyone.</p>
          <p>
            <h4>Features</h4>
            <ul>
              <li> Everything is free, weekly, daily, hourly update with real time.</li><br/>
              <li> World weather forecasts for all countries:</li><br/>
              <ul>
                <li> United States</li> <br/>
                <li> Canada </li> <br/>
                <li>the United Kingdom </li> <br/>
                <li>also another country </li> <br/>
                </ul>

            </ul>
          </p>
        </div>
        <div class="aboutpage">
          <h3>Contact with us </h3>
          <form class="contact">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter your name .." class="inputs" onChange={this.handelChange.bind(this)} value={this.state.firstname} />
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter your last name .." class="inputs" onChange={this.handelChange.bind(this)} value={this.state.lastname}></input>
            <label for="country">Country</label>
            <input type="text" id="coutry" name="country" placeholder="Enter your country .." class="inputs" onChange={this.handelChange.bind(this)} value={this.state.country} />
            <label for="subject">Subject</label>
            <input type="textarea" name="subject" class="inputs" onChange={this.handelChange.bind(this)} value={this.state.subject} />
            <input type="submit" value="Submit" class="butn" onClick={this.handelSubmite.bind(this)} />
          </form>

        </div>
      </div>
    );
  }
}
export default withRouter(About);
