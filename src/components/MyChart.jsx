// src/components/MyChart.jsx

import React from 'react';

// Import the data from our new data file
import { monthlyData, pieChartData, radarChartData, quarterlyPerformanceData } from '../assets/data.jsx';

// Import all our chart components
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import RadarChartComponent from './RadarChartComponent';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent.jsx';
import ComposedChartComponent from './ComposedChartComponent.jsx';

// We can remove the Bar chart for now to keep it clean, or keep it if you like.
// Let's remove it for this example to just show the new charts.

function MyChart() {
  return (
    <div>
      <h1>NGO Feedback Dashboard</h1>
      
      {/* Pass the correct data to each component */}
      <LineChartComponent data={monthlyData} />
      <BarChartComponent data={quarterlyPerformanceData} />
      <AreaChartComponent data={monthlyData} />
      <PieChartComponent data={pieChartData} />
      <RadarChartComponent data={radarChartData} />
      <ComposedChartComponent data={quarterlyPerformanceData} />

    </div>
  );
}

export default MyChart;