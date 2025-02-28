import "./SearchWeather.css";

const SearchWeather = () => {
  return (
    <div className="search-weather-container">
      <div className="search-weather-wrapper">
        <div className="gridone">
          <span className="gridone-degree">22°</span>
          <span className="gridone-status">Heavy Rain</span>
        </div>
        <div className="gridtwo">
          <img src="./rüzgarlı.png" className="gridtwo-icon" />
        </div>
        <div className="gridthree">
          <span className="gridthree-location">Tokyo,Japan</span>
        </div>
        <div className="gridfour">
          <span>22°</span>
          <span>~</span>
          <span>32°</span>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
