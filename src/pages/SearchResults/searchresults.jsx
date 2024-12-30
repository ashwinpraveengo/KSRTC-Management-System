import React from "react";
import { useLocation } from "react-router-dom";
import './searchresults.css';
import { useNavigate } from "react-router-dom";

function SearchResults() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const source = searchParams.get("source") || "Unknown";
    const destination = searchParams.get("destination") || "Unknown";
    const date = searchParams.get("date") || "Unknown";
    const navigate = useNavigate();
    const searchResults = [
        {
            operator: "KSRTC",
            departureTime: "21:15",
            duration: "08h 15m",
            arrivalTime: "05:30",
            arrivalDate: "01-Jan",
            source: "Fort Road",
            destination: "Baangalore",
            fare: "1149",
            seatsLeft: 12,
            
        },
        {
            operator: "KSRTC",
            departureTime: "21:15",
            duration: "08h 15m",
            arrivalTime: "05:30",
            arrivalDate: "01-Jan",
            source: "Kannur Road",
            destination: "Banglore",
            fare: "1149",
            seatsLeft: 12,
            
        },
    ];


    return (
        <div className="search-results-container">
            <div className="top">
                <p className="search-header">{`${source} to ${destination}`}</p>
                <p className="search-date">Date: {date}</p>
            </div>
            <div className="results">
                {searchResults.map((result, index) => (
                    <div className="result-container" key={index}>
                        <div className="operator-section">
                            <p className="operator-name">{result.operator}</p>
                        </div>
                        <div className="details-section">
                            <div className="time-info">
                                <p className="departure">{result.departureTime}</p>
                                <p className="duration">{result.duration}</p>
                                <p className="arrival">{result.arrivalTime} <span>{result.arrivalDate}</span></p>
                            </div>
                            <div className="route-info">
                                <p className="source">{result.source}</p>
                                <p className="destination">{result.destination}</p>
                            </div>

                        </div>
                        <div className="pricing-section">
                            <p className="fare">Starts from INR {result.fare}</p>
                            <p className="seats-left">{result.seatsLeft} Seats available</p>
                        </div>
                        <button className="book-seats"
                        onClick={() =>
                            navigate(`/passenger-details?source=${result.source}&destination=${result.destination}&date=${date}`)
                        }
                        >Book Tickets</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
