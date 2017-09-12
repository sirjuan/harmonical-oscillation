import React from 'react';
import { Scatter } from 'react-chartjs-2';

const scatterChart = ({color = 'blue', values = [], keys = {}, title = ''}) => {
  console.log(color)
  const data = {
    datasets: [{
      label: title,
      fill: false,
      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      borderColor: color,
      data: values.map(line => ({x: line[keys.x], y: line[keys.y]}))
    }]
  }
  return <Scatter data={data} />
};

const charts = {
  scatter: props => scatterChart(props),
};

const Chart = ({type, ...props}) => charts[type](props);

export default Chart;
