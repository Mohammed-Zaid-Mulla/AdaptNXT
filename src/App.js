// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Charts from './components/Charts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <Charts />
      </main>
    </div>
  );
}

export default App;
