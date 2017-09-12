import React from 'react';
import { Button, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';

export default class Example extends React.Component {
  constructor() {
    super()
    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { title: '', x: '', y: '', color: '#0000FF' }
  }
  changeValue(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.props.toggle();
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" id="title" value={this.state.title} placeholder="Enter title for chart" onChange={this.changeValue}/>
        </FormGroup>
        <FormGroup>
          <Label for="x">*X-axis</Label>
          <Input type="select" name="select" id="x" value={this.state.x} onChange={this.changeValue}>
            {this.props.keys.map((key, index) => <option key={key}>{index === 0 ? '' : key}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="y">*Y-axis</Label>
          <Input type="select" name="select" id="y" value={this.state.y} onChange={this.changeValue}>
            {this.props.keys.map((key, index) => <option key={key}>{index === 0 ? '' : key}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="color">Line Color</Label>
          <Input type="color" id="color" value={this.state.color} placeholder="Pick color" onChange={this.changeValue}/>
        </FormGroup>
        <ModalFooter>
          <Button color="success" disabled={this.state.x.length === 0 || this.state.y.length === 0 }>Submit</Button>{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Form>
    );
  }
}
