import React from 'react';
import { Row, Col, Input } from 'reactstrap';

const Header = ({onFileChange}) => (
  <Row className='header'>
    <Col xs={12} className='header text-center'>
      <Input className='center-block' type="file" onChange={onFileChange} />
    </Col>
  </Row>
)

export default Header;
