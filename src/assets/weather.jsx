import "./weather.css";
const Weather = () => {
  return (
    <div className="weather-container">
      <div className="weather-city-state">
        <div className="weather-city">
          <span>Tokyo</span>
        </div>
        <div className="weather-status">
          <span>Heavy Rain</span>
        </div>
        <div className="weather-degree">22°</div>
        <div className="status-icon">
          <img src="../rain.png"></img>
        </div>
      </div>
    </div>
  );
};
export default Weather;
