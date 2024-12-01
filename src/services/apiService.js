import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchBuses = async () => {
    try {
        const response = await axios.get(`${API_URL}/buses`);
        return response.data;
    } catch (error) {
        console.error('Error fetching buses:', error);
        throw error;
    }
};
