import React from 'react';
import { Scatter } from 'react-chartjs-2';

const scatterChart = ({color = 'blue', values = [], keys = {}, title = ''}) => {
  const data = {
    datasets: [{
      label: `${keys.x} / ${keys.y}`,
      fill: false,
      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      borderColor: color,
      data: values.map(line => ({x: line[keys.x], y: line[keys.y]}))
    }]
  }
  const options = {

    title: {
      display: title ? true : false,
      text: title,
      fontSize: 24
    }
  }
  return <Scatter data={data} options={options} />
};

const charts = {
  scatter: props => scatterChart(props),
};

const Chart = ({type, ...props}) => charts[type](props);

export default Chart;
