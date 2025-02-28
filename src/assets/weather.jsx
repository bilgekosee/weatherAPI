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
      <div className="pm-weather">
        <span className="clock">7PM</span>
        <div className="pmIcon-container">
          <img src="./rüzgarlı.png" className="pm-icon" />
        </div>

        <span className="degree">22°</span>
      </div>
    </div>
  );
};
export default Weather;
