// src/components/ComposedChartComponent.jsx

import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function ComposedChartComponent({ data }) {
  return (
    <div>
      <h3 style={{ marginTop: '40px' }}>Quarterly Performance (Composed Chart)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Volunteers are shown as bars */}
          <Bar dataKey="volunteers" barSize={20} fill="#413ea0" />
          {/* Projects are shown as a line */}
          <Line type="monotone" dataKey="projects" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComposedChartComponent;