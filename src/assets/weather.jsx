import "./weather.css";

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div></div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-city-state">
        <div className="weather-city">
          <span>{weatherData.name}</span>
        </div>
        <div className="weather-status">
          <span>{weatherData.weather[0].description}</span>{" "}
        </div>
        <div className="weather-degree">{weatherData.main.temp}°</div>{" "}
        <div className="status-icon"></div>
      </div>
      <div className="pm-weather">
        <span className="clock">7PM</span>
        <div className="pmIcon-container">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather-icon"
          />
        </div>
        <span className="degree">{weatherData.main.temp}°</span>
      </div>
      <div className="weather-other-data">
        <div className="weather-other-data-wrapper">
          <img src="./Temperature.svg" alt="Temperature icon" />
          <span>{weatherData.main.temp}°C</span>
        </div>
        <div className="weather-other-data-wrapper">
          <img src="./Wet.svg" alt="Humidity icon" />
          <span>{weatherData.main.humidity}% Humidity</span>
        </div>
        <div className="weather-other-data-wrapper">
          <img src="./Mountain.svg" alt="Pressure icon" />
          <span>{weatherData.main.pressure} hPa Pressure</span>
        </div>
        <div className="weather-other-data-wrapper">
          <img src="./Wind.svg" alt="Wind icon" />
          <span>{weatherData.wind.speed} m/s Wind Speed</span>
        </div>
        <div className="weather-other-data-wrapper">
          <img src="./Sun.svg" alt="Sun icon" />
          <span>
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}{" "}
            Sunrise
          </span>
        </div>
        <div className="weather-other-data-wrapper">
          <img src="./Humidity.svg" alt="Humidity icon" />
          <span>{weatherData.main.humidity}% Humidity</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
