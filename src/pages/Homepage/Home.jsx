import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Destinations from "../../components/Destinations/topdest";
import Footer from "../../components/footer/footer";

const placesInKerala = [
  "Kochi",
  "Thiruvananthapuram",
  "Kozhikode",
  "Kannur",
  "Alappuzha",
  "Thrissur",
  "Palakkad",
  "Idukki",
  "Malappuram",
  "Kottayam",
  "Kasaragod",
  "Wayanad",
  "Pathanamthitta",
  "Ernakulam",
];

function Home() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date,setDate]=useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const navigate = useNavigate();

  const filterSuggestions = (input, type) => {
    const filteredPlaces = placesInKerala.filter((place) =>
      place.toLowerCase().startsWith(input.toLowerCase())
    );

    if (type === "source") {
      setSourceSuggestions(filteredPlaces);
    } else {
      setDestinationSuggestions(filteredPlaces);
    }
  };

  const handleInputChange = (e, type) => {
    const input = e.target.value;
    if (type === "source") {
      setSource(input);
      filterSuggestions(input, "source");
    }else if(type=="date"){
      setDate(input);
    } else {
      setDestination(input);
      filterSuggestions(input, "destination");
    }
  };

  const handleSuggestionClick = (suggestion, type) => {
    if (type === "source") {
      setSource(suggestion);
      setSourceSuggestions([]);
    } else {
      setDestination(suggestion);
      setDestinationSuggestions([]);
    }
  };

    const handleSearchClick = () => {
      if (source && destination) {
        navigate(`/search-results?source=${source}&destination=${destination}&date=${date}`);
      } else {
        alert("Please fill in both source and destination fields.");
      }
    };
  

  return (
    <>
      <div className="home-container">
        <div className="header">
          <div className="header-text">
            Welcome to Kerala's No. Booking Website!
          </div>
          <div className="form-container">
            <div className="form">
              <div className="input-group">
                <label className="input-label">From</label>
                <input
                  type="text"
                  placeholder="Enter source"
                  className="input-field"
                  value={source}
                  onChange={(e) => handleInputChange(e, "source")}
                />
                {sourceSuggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {sourceSuggestions.map((place, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(place, "source")}
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="input-group">
                <label className="input-label">To</label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="input-field"
                  value={destination}
                  onChange={(e) => handleInputChange(e, "destination")}
                />
                {destinationSuggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {destinationSuggestions.map((place, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(place, "destination")}
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="input-group">
                <label className="input-label">Date</label>
                <input type="date" className="input-field"
                value={date}
                onChange={(e) => handleInputChange(e, "date")}/>
              </div>
              <button className="search-button" onClick={handleSearchClick}>
                SEARCH BUSES
              </button>
            </div>
          </div>
          <div className="tagline">
            ജീവിതം ഒരു യാത്രയാണ്, ഓരോ നിമിഷവും ആസ്വദിക്കൂ.
          </div>
        </div>
      </div>
      <Destinations />
      <Footer />
    </>
  );
}

export default Home;
