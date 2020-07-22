import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const api = {
  key: '21e8aec578e07d1343c0942cb7627fa1',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Weathers() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  var dateBuilder = (d) => {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    var day = days[d.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'Weathers warm'
            : 'Weathers cold'
          : 'body'
      }
    >
      <main>
        <div class='nav'>
          <header class='h2'>
            <h2>Weather app</h2>
            <br />
            <nav>
              <ul class='links'>
                <li>
                  <Link to='/auth/Weathers' class='right'>
                    HOME
                  </Link>
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
        <div>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != 'undefined' ? (
          <div class='weather'>
            <div className='location-box'>
              <div>
                {weather.name}, {weather.sys.country}
              </div>
              <br />
              <hr />
              <div>{dateBuilder(new Date())}</div>
              <br />
              <hr />
              <div>
                <div>{Math.round(weather.main.temp)}°C</div>
                <br />
                <hr />
                <div> {weather.weather[0].main}</div>
              </div>
              <br />
              <marquee>
                <p>
                  Niveen Ismail Salem Elkhozondar Niveen Ismail Salem
                  Elkhozondar
                </p>
              </marquee>
            </div>
            <div></div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default Weathers;
