import React, { useState } from "react";
//import "./style.css";
//  import { query } from 'express';
import axios from "axios";
const api = {
  key: "21e8aec578e07d1343c0942cb7627fa1",
  base: "https:api.openweathermap.org/data/2.5/",
};

function Weathers() {
  // var className = "Weathers";
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

//   const search = (evt) => {
//     if (evt.key === "Enter") {
//   axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//   .then((result) => {
//     setWeather(result);
//     setQuery("");
//     console.log(result);
//   });
// }
// }
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  var dateBuilder = (d) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
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
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "Weathers warm"
            : "Weathers cold"
          : "Weathers"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>

              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°C</div>
                <div className="weather"> {weather.weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Weathers;
