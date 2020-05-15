import React from 'react';
import { Pie } from 'react-chartjs-2';

export const PieChart = ({ labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Average Price Of Type',
        data: [1, 1, 1, 2, 4, 2, 1, 1, 2, 1, 1, 1],
        backgroundColor: [
          'rgba(255, 99, 71, 1)',
          'rgb(255, 0, 0)',
          'rgb(238, 130, 238)',
          'rgb(60, 179, 113)',
          'rgb(255, 165, 0)',
          'rgba(rgb(0, 0, 255)',
          'rgba(255, 0, 0, 0.5)',
          'rgb(60, 60, 60)',
          'rgb(106, 90, 205)',
          'rgba(255, 99, 71, 0.5)',
          'rgba(0, 0, 255,0.5)',
          'rgba(0, 255, 0, 0.5)',
        ],
      },
    ],
  };
  return (
    <Pie
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'Toys Per Year',
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
