import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
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
                  <a href='#'>LOGOUT</a>
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
      </div>
    );
  }
}
export default withRouter(About);
