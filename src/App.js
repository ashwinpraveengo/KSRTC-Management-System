import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Signup from './pages/Signup/Signup';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;