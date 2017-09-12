import React from 'react';
import { Row, Col } from 'reactstrap';
import Chart from './Chart';
import ChartModal from './ChartModal';

export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addChart = this.addChart.bind(this);
    this.state = { charts: [] };
    this.chartProto = { type: 'scatter' }
  }

  addChart(chart) {
    this.setState({charts: [...this.state.charts, {...this.chartProto, ...chart}]})
  }

  render() {
    return (
      <div>
        <Row style={this.state.charts.length === 0 ? {height: window.innerHeight-100, alignItems: 'center'}: {padding: 15}}>
          <Col style={{textAlign: 'center'}}>
            <ChartModal buttonLabel='Add Chart' addChart={this.addChart} keys={Object.keys(this.props.values['1'])} />
          </Col>
        </Row>
        { this.state.charts.map(chart => (
          <Row>
            <Col>
              <Chart
                type={chart.type}
                keys={{x: chart.x, y: chart.y}}
                values={Object.values(this.props.values)}
                title={chart.title}
                color={chart.color}
              />
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}
