import { useState, useEffect } from "react";
import "./SearchWeather.css";
import Weather from "../weather";

const SearchWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWeather, setShowWeather] = useState(false);

  const apiKey = "20bb422aef46d94994dc3894d6281843";

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    const encodedCity = encodeURIComponent(city);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          setError("City not found");
          setLoading(false);
        } else {
          setWeatherData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <button
        className="weather-button"
        onClick={() => weatherData && setShowWeather(true)}
      >
        <div className="search-weather-container">
          <div className="search-weather-wrapper">
            {weatherData ? (
              <>
                <div className="gridone">
                  <span className="gridone-degree">
                    {weatherData.main.temp}°
                  </span>
                  <span className="gridone-status">
                    {weatherData.weather[0].description}
                  </span>
                </div>
                <div className="gridtwo">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    className="gridtwo-icon"
                    alt="weather-icon"
                  />
                </div>
                <div className="gridthree">
                  <span className="gridthree-location">
                    {weatherData.name}, {weatherData.sys.country}
                  </span>
                </div>
                <div className="gridfour">
                  <span>{weatherData.main.temp_min}°</span>
                  <span>~</span>
                  <span>{weatherData.main.temp_max}°</span>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </button>

      {showWeather && weatherData && <Weather weatherData={weatherData} />}
    </>
  );
};

export default SearchWeather;
