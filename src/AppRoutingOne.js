import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AddTravelCar from './components/Travels/Card/addTravelCard';
import LoginScreen from './components/login/loginScreen';
import Logo from './images/Logo.png';
import TravelDetail from './components/Travels/travelDetail';

function AppRoutingOne() {
  return (
    <Router>
      <header className="flex justify-between h-20 px-6 py-4 items-center border-b-2 border-gray-900">
        <Link to="/travels" className="flex items-center text-gray-900 font-bold text-xl">
          <img src={Logo} alt="logo" className="h-12 hover:h-16 duration-150 mr-4 rounded-full" />
          Gauchada App
        </Link>
        <div className="text-gray-900 font-bold text-xl w-1/6 flex justify-around ">
          <Link to="/addTravel" className="hover:text-2xl duration-150">
            Add New Travel
          </Link>
          <Link to="/login" className="hover:text-2xl duration-150">
            Log In
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/travels" element={<HomePage />} />
        <Route path="/addTravel" element={<AddTravelCar />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/travels/:id" element={<TravelDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
