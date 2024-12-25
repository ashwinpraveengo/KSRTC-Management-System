import React from "react";
import './Home.css';
import Destinations from "../../components/Destinations/topdest";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <><div className="home-container">
          <div className="header">
              <div className="header-text">
                  Welcome to Kerala's No. Booking Website ! 
              </div>
              <div className="form-container">
                  <div className="form">
                      <div className="input-group">
                          <label className="input-label">From</label>
                          <input
                              type="text"
                              placeholder="Enter source"
                              className="input-field" />
                      </div>
                      <div className="input-group">
                          <label className="input-label">To</label>
                          <input
                              type="text"
                              placeholder="Enter destination"
                              className="input-field" />
                      </div>
                      <div className="input-group">
                          <label className="input-label">Date</label>
                          <input
                              type="date"
                              className="input-field" />
                      </div>
                      <button className="search-button">SEARCH BUSES</button>
                  </div>
              </div>
              <div className="tagline">
                  ജീവിതം ഒരു യാത്രയാണ്, ഓരോ നിമിഷവും ആസ്വദിക്കൂ.
              </div>
          </div>
      </div><Destinations /><Footer/></>
      
  );
}

export default Home;
