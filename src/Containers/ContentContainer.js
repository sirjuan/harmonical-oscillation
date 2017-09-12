import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import TableContainer from './TableContainer';
import ChartContainer from './ChartContainer';

export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { activeTab: 0 };
    this.tabs = [
      { id: 0, title: 'Data',  content: (values) => <TableContainer lines={values}/> },
      { id: 1, title: 'Charts', content: (values) => <ChartContainer values={values} /> }
    ];
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Nav tabs>
          { this.tabs.map(tab => (
            <NavItem key={tab.id}>
              <NavLink className={activeTab === tab.id ? 'active' : ''} onClick={() => this.toggle(tab.id)}>
                {tab.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {this.tabs.map(tab => (
            <TabPane tabId={tab.id}>
              <Row>
                <Col sm="12">
                  {tab.content(this.props.values)}
                </Col>
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  }
}
