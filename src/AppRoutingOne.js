import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AddTravelCar from './components/Travels/Card/addTravelCar';
import Logo from './images/Logo.png';

function AppRoutingOne() {
  return (
    <Router>
      <header className="flex justify-between h-20 px-6 py-4 items-center border-b-2 border-gray-900">
        <Link to="/" className="flex items-center text-gray-900 font-bold text-xl">
          <img src={Logo} alt="logo" className="h-12 hover:h-16 duration-150 mr-4 rounded-full" />
          Gauchada App
        </Link>
        <div className="text-gray-900 font-bold text-xl hover:text-2xl">
          <Link to="/addTravel">Add New Travel</Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/addTravel" element={<AddTravelCar />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
