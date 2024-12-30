import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Homepage/Home';
import SearchResults from './pages/SearchResults/searchresults';
import PassengerDetails from './pages/Book/passengerdetails';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { path: '/', element: <Home /> }, 
        { path: '/signup', element: <Signup /> },
        
      ],
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/search-results',
      element: <SearchResults/>,
    },
    {
      path: '/passenger-details',
      element: <PassengerDetails/>,
    }
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
