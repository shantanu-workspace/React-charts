// src/components/LineChartComponent.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LineChartComponent({ data }) {
  return (
    <div>
      <h3 style={{ marginTop: '40px' }}>Line Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* ---- FIX WAS HERE ---- */}
          <Line type="monotone" dataKey="feedback" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;