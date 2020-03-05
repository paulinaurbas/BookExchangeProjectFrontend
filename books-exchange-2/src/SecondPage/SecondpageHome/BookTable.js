import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonToTable } from "react-json-to-table";
const BookTable = (props) => {
  return (
    <Table className="Table" striped bordered hover size="sm">
        <thead>
            <tr>
                <th className="TitleTable BColor">Title</th>
                <th className="TitleTable BColor">Author</th>
                <th className="PriceTable BColor">ISBN</th>
          
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="ThAlign">{props.title}</th>
                <th className="ThAlign ">{props.author}</th>
                <th className="ThAlign">{props.ISBN}</th>
            </tr>
        </tbody>
    </Table>
  )
  }
  export default BookTable
/*
function BookTable() {
const myJson = {
  "Book 1": { title: "Harry Potter", author: "J.K.Rowling", ISBN: "123332" },
  "Book 2" : {title: "Mechanik", author: "M. Presley", ISBN: "21390128"}
};
return (
  <div className="App">
    <JsonToTable json={myJson} />
  </div>
);
}/*
class BookTable extends Component {
      constructor(props) {
        super(props)
        this.state = {
          books: []
        }
      }
    /*
      componentWillMount() {
        db.collection("books")
          .onSnapshot(function (querySnapshot) {
            let gamesArray = []
            querySnapshot.forEach(function (doc) {
              gamesArray.push(doc.data())
            });
            this.setState({ books: bookArray })
          })
      }*/
    /*
      renderRow = () => {
        return this.state.books.map(function (val, i) {
          return (
            <tr>
              <td key={i}>
                {val.title}
                {val.author}
                {val.ISBN}
              </td>
            </tr>
          )
        })
      }
    
      render() {
        return (
          <table className="ui inverted table">
            <thead>
              <tr>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRow()}
            </tbody>
          </table>
        )
      }
    }
*/
//export default BookTable 