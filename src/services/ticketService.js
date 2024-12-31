import axios from 'axios';

export const bookTicket = async (formData) => {
  const API_URL = "http://localhost:5000/api/book-ticket"; 

  const response = await axios.post(API_URL, formData);
  return response.data; 
};
