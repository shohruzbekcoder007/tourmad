import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="users" element={<p>user</p>} />
      </Routes>
  );
}

export default App;
