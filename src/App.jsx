// src/App.jsx

import React from 'react';
import MyChart from './components/MyChart'; // Import your new chart component
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Application Dashboard</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <MyChart />
      </div>
    </div>
  );
}

export default App;