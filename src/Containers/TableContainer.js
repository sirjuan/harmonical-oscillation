import React from 'react';
import { Table } from 'reactstrap';

const TableContainer = ({lines = {}}) => (
  <Table striped>
    <TableHeader headerLine={Object.keys(lines['1'])}/>
    <TableBody lines={Object.values(lines)}/>
  </Table>
);

export default TableContainer;

const TableHeader = ({headerLine}) => (
  <thead>
    <tr>
      { headerLine.map((key, i) => <th key={i}>{key}</th>) }
    </tr>
  </thead>
);

const TableBody = ({lines}) => (
  <tbody>
    { lines.map(line =>
      <tr key={line['#']}>{Object.values(line).map((value, i) => <td key={i}>{value.toFixed(2)}</td>)}</tr>
    )}
  </tbody>
);
