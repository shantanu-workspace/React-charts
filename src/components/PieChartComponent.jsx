// src/components/PieChartComponent.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define colors for the pie slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PieChartComponent({ data }) {
  return (
    <div>
      <h3 style={{ marginTop: '40px' }}>Feedback Distribution (Pie Chart)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;