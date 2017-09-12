import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { processFile } from './utils';
import ContentContainer from '../ContentContainer';
import Header from './Header';
import WelcomeCard from './WelcomeCard';

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
        <Header onFileChange={this.onFileChange} />
        { Object.keys(this.state.values).length > 0
          ? <ContentContainer values={this.state.values}/>
          : <WelcomeCard />
        }
      </Container>
    );
  }
}

export default App;
