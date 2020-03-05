import React from 'react'
import {Table} from 'react-bootstrap'
import './SecondPageMatches.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton} from 'react-bootstrap'
const MatchesTable = (props) =>{
    return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th> # </th>
      <th> Your Book </th>
      <th> Book You want </th>
      <th> User </th>
      <th> Status </th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td> 1</td>
      <td>Harry Potter and the Philosopher's Stone</td>
      <td>Mechanik </td>
      <td>Lewis Hamilton </td>
      <td>
       <DropdownButton id="dropdown-basic-button" title="Status">
       <Dropdown.Item href="#/action-1">Waiting for user 2</Dropdown.Item>
       <Dropdown.Item href="#/action-2">After transaction</Dropdown.Item>
      </DropdownButton>
        </td>
    </tr>
  </tbody>
</Table>
    );
}
export default MatchesTable