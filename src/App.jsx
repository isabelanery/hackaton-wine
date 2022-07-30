import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/landing.page';
import '@picocss/pico';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
