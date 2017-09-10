import React, { Component } from 'react';
import './styles/App.css';
import { Container, Row, Col, Input } from 'reactstrap'
import ValueTable from './ValueTable';
import Chart from './Chart'
import { processFile } from './utils';

class App extends Component {
  constructor() {
    super();
    this.state = { values: {} }
    this.onFileChange = this.onFileChange.bind(this);
  }
  onFileChange(e) {
    const reader = new FileReader();
    reader.onload = (event) => this.setState({ values: processFile(event.target.result) });
    reader.readAsText(e.target.files[0]);
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Input type="file" onChange={this.onFileChange} />
        </Row>
          { Object.keys(this.state.values).length > 0 &&
            <Row>
              <Col xs='6'>
                <ValueTable lines={this.state.values}/>
              </Col>
              <Col xs='6'>
                <Chart
                  type='scatter'
                  keys={{x: 'Time(s)', y: 'Distance(m)'}}
                  values={Object.values(this.state.values)}
                  title='Distance as a function of time'
                />
              </Col>
            </Row>
          }
      </Container>
    );
  }
}

export default App;
