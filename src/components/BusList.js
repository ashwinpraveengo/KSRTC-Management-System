import React, { useEffect, useState } from 'react';
import { fetchBuses } from '../services/ticketService';

const BusList = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        const loadBuses = async () => {
            try {
                const data = await fetchBuses();
                setBuses(data);
            } catch (error) {
                console.error('Error loading buses:', error);
            }
        };

        loadBuses();
    }, []);

    return (
        <div>
            <h1>Available Buses</h1>
            <ul>
                {buses.map((bus) => (
                    <li key={bus.id}>{bus.bus_number}</li>
                ))}
            </ul>
        </div>
    );
};

export default BusList;
