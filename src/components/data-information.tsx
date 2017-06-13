import React, { SFC } from 'react';
import { Bar } from 'react-chartjs-2';
import { mean, median, standardDeviation, variance, quantile } from 'simple-statistics';

export interface DataInformationProps {
  data: number[];
  name: string;
  description?: string;
}

export const DataInformation: SFC<DataInformationProps> = (props) => {
  const data = {
    labels: props.data.map((val, index) => index),
    datasets: [{
      label: props.name,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: props.data
    }]
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

  const meanRes = mean(props.data).toFixed(1);
  const medianRes = median(props.data).toFixed(1);
  const standardDeviationRes = standardDeviation(props.data).toFixed(1);
  const varianceRes = variance(props.data).toFixed(1);
  const quantiles = quantile(props.data, [0.25, 0.5, 0.75, 1]);

  return (
    <div></div>
  );
};
