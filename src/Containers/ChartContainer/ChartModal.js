import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddChartForm from './AddChartForm';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" large onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <AddChartForm keys={this.props.keys} submit={this.props.addChart} toggle={this.toggle}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
