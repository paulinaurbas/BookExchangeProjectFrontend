import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
const BookAllTable = (props) => {
  return (
    <Table className="Table" striped bordered hover size="sm">
        <thead>
            <tr>
                <th className="TitleTable BColor">Exchange</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="ThAlign">{props.text}</th>
            </tr>
        </tbody>
    </Table>
  )
  }
  export default BookAllTable