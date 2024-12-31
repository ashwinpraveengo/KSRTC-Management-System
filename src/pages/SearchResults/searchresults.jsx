import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './searchresults.css';

function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return {
        date: date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
        time: date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
    };
}

function calculateDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffMs = end - start; // Difference in milliseconds

    if (isNaN(diffMs) || diffMs < 0) return "Unknown"; // Invalid or negative duration

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

function SearchResults() {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get("source") || "Unknown";
    const destination = searchParams.get("destination") || "Unknown";
    const date = searchParams.get("date") || "Unknown";

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/search?source=${source}&destination=${destination}&date=${date}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setSearchResults(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchResults();
    }, [source, destination, date]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="search-results-container">
            <div className="top">
                <p className="search-header">{`${source} to ${destination}`}</p>
                <p className="search-date">Date: {formatDateTime(date).date}</p>
            </div>
            <div className="results">
                {searchResults.map((result, index) => {
                    const boarding = result.boardingdate ? formatDateTime(result.boardingdate) : {};
                    const arrival = result.arrivaldate ? formatDateTime(result.arrivaldate) : {};
                    const duration = result.boardingdate && result.arrivaldate
                        ? calculateDuration(result.boardingdate, result.arrivaldate)
                        : "Unknown";

                    return (
                        <div className="result-container" key={index}>
                            <div className="operator-section">
                                <p className="operator-name">{result.operator || "Unknown Operator"}</p>
                            </div>
                            <div className="details-section">
                                <div className="time-info">
                                    <p className="departure">{boarding.time || "Unknown"}</p>
                                    <p className="duration">{duration}</p>
                                    <p className="arrival">{arrival.time || "Unknown"}</p>
                                </div>
                                <div className="route-info">
                                    <p className="source">{result.source}</p>
                                    <p className="destination">{result.destination}</p>
                                </div>
                            </div>
                            <div className="pricing-section">
                                <p className="fare">Starts from INR {result.fare || "N/A"}</p>
                                <p className="seats-left">{result.seats_left} Seats available</p>
                            </div>
                            <button
                                className="book-seats"
                                onClick={() =>
                                    navigate(
                                        `/passenger-details?source=${result.source}&destination=${result.destination}&date=${date}&fare=${result.fare}&seats_left=${result.seats_left}&schedule_id=${result.scheduleid}`
                                    )
                                }
                            >
                                Book Tickets
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchResults;
