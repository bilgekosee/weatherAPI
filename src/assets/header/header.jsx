import { useEffect, useState } from "react";
import "./header.css";
import { LayoutGrid, Bell, MapPin, Search } from "lucide-react";
import CustomizedSwitches from "./CustomSwitch";
import SearchWeather from "../SearchWeather/SearchWeather";

const Header = () => {
  const [showSearchWeather, setShowSearchWeather] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=20bb422aef46d94994dc3894d6281843`
          )
            .then((res) => res.json())
            .then((data) => {
              const city = data.name;
              const country = data.sys.country;
              setLocation(`${city}, ${country}`);
            })
            .catch((error) => console.log("error fetching location", error));
        },
        (error) => console.log(error)
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setShowSearchWeather(true);
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="responsive">
          <div className="header-group-one">
            <div className="icons-header">
              <div className="icon-header-group">
                <div className="icon-header">
                  <LayoutGrid size={20} />
                </div>
                <div className="icon-header">
                  <Bell size={20} />
                </div>
              </div>

              <div className="location-icon">
                <MapPin size={20} />
                {location}
              </div>
            </div>
          </div>

          <div className="header-group-two">
            <div className="search">
              <Search className="search-icon" />
              <input
                className="search-input"
                placeholder="Search for a city or airport"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>

        <div className="header-group-three">
          <CustomizedSwitches />
          <img
            className="profile"
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </div>
      </div>
      {showSearchWeather && <SearchWeather city={searchTerm} />}
    </>
  );
};

export default Header;
