import React from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart = ({ eduTyps, funnyTyps, adultTyps, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Average Price Of Type',
        data: [eduTyps, funnyTyps, adultTyps],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };
  return (
    <Bar
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'The Most Expensive Type',
          fontSize: 25,
        },
        legend: {
          display: true,
          position: 'top',
        },
      }}
    />
  );
};
