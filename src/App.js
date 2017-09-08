import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Scatter} from 'react-chartjs-2';

class App extends Component {
  constructor() {
    super();
    this.state = { values: {}, keys: [] }
    this.onFileChange = this.onFileChange.bind(this);
  }
  onFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) =>{
      const lines = event.target.result.split('\n');
      const [ headerLine, ...contentLines ] = lines;
      const headers = headerLine.split(' ');
      const normalizedLines = contentLines.reduce((newLines, line, index) => {
        const newLine = line.split(' ');
        const newerLine = newLine.reduce((acc, cur, index) => {
          return {...acc, [headers[index]]: Number(cur)}
        }, {});
        return {...newLines, [index]: {index, ...newerLine}  }
      }, {});
      this.setState({values: normalizedLines, keys: headers})

    };
    reader.readAsText(file);

  }
  render() {
    return (
      <div className="App">
        <input id="upload" ref="upload" type="file" onChange={this.onFileChange}/>
        <div>
          { Object.keys(this.state.values).length > 0 &&
            <div>
              <Scatter data={{
                datasets: [{
                  label: 'Scatter Dataset',
                  fill: false,
                  pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                  pointBorderColor: 'rgba(0, 0, 0, 0)',
                  borderColor: 'blue',
                  data: Object.values(this.state.values).map(line => ({x: line['Time(s)'], y: line['Distance(m)']}))
                }]
              }} />
              <table>
                <thead>
                  <tr>
                    { Object.keys(this.state.values['0']).map(key => <th>{key}</th>)}
                  </tr>
                </thead>
                <tbody>
                  { Object.values(this.state.values).map(line => (
                    <tr>{Object.values(line).map(value => <td>{value}</td>)}</tr>
                  ))}
                </tbody>

              </table>
            </div>

          }
        </div>


      </div>
    );
  }
}

export default App;
