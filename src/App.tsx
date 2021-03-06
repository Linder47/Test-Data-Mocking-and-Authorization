import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import './firebase';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (

    <div className="App">

      <BrowserRouter basename="Test-Data-Mocking-and-Authorization/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
