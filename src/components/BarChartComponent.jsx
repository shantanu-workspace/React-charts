// src/components/BarChartComponent.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChartComponent({ data }) {
  return (
    <div>
      <h3>Quarterly Performance (Bar Chart)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Bar for Volunteers */}
          <Bar dataKey="volunteers" fill="#8884d8" />
          {/* Bar for Projects */}
          <Bar dataKey="projects" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;