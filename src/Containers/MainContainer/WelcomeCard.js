import React from 'react';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';

const WelcomeCard = props => (
  <Row style={{height: window.innerHeight-100, alignItems: 'center'}} className='justify-content-sm-center'>
    <Col sm={10} md={8} lg={6} className='center-block'>
      <Card block className="text-center">
        <CardTitle>Harmonical Oscillation</CardTitle>
        <CardText>This application converts harmonic oscillation measurements log data
         and converts it to charts. Text file needs to be in following format:</CardText>
         {sampleValues.map(text => <CardText className='sampleTable'>{text}</CardText>)}
      </Card>
    </Col>
  </Row>
);

export default WelcomeCard;

const sampleValues = [
  'Time(ms) Distance(cm)',
  '0 0.10',
  '51 6.57',
  '103 20.03',
  '155 22.88',
  '207 24.25',
  '260 24.97',
  '312 23.16',
  '364 20.75'
];
