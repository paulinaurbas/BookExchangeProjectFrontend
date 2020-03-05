import React, {Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddModal.css';

export default class AddModal extends Component {
    constructor() {
        super();
        this.state = {
            Title: '',
            Author: '',
            ISBN: '',
            TitleWant: '',
            AuthorWant: '',
            ISBNWant: ''
        }
        this.Title = this.Title.bind(this);
        this.Author = this.Author.bind(this);
        this.ISBN = this.ISBN.bind(this);
        this.TitleWant = this.TitleWant.bind(this);
        this.AuthorWant = this.AuthorWant.bind(this);
        this.ISBNWant = this.ISBNWant.bind(this);
    }

    Title(event) {
        this.setState({ Title: event.target.value })
    }
    Author(event) {
        this.setState({ Author: event.target.value })
    }
    ISBN(event) {
        this.setState({ ISBN: event.target.value })
    }

    TitleWant(event) {
        this.setState({ TitleWant: event.target.value })
    }
    AuthorWant(event) {
        this.setState({ AuthorWant: event.target.value })
    }
    ISBNWant(event) {
        this.setState({ ISBNWant: event.target.value })
    }
    
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    addBook(event) {
        debugger;
        //------Adding a book I HAVE
            fetch("http://localhost:8080/JavaServlets-EE7/NewExchange", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Title: this.state.Title,
                    Author: this.state.Author,
                    ISBN: this.state.ISBN,
                    TitleWant: this.state.TitleWant,
                    AuthorWant: this.state.AuthorWant,
                    ISBNWant: this.state.ISBNWant
                })
            })
        //
                   
        {this.props.close()}
    }
    render() {
        return(
            <div className="addModal">
                <a className="close" onClick={this.props.close}>
                    &times;
                </a>
                <div className="addHeader"> Add a book you have </div>
                <div className="addContent">
                  <center>
                    <Form className="addForm">
                    <Form.Group controlId="formBasicTitle" >
                        <Form.Label >Title</Form.Label>
                        <Form.Control  className="Title" type="text" 
                            placeholder="The Witcher: The Last Wish" 
                            onChange={this.Title}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Andrzej Sapkowski" 
                            onChange={this.Author}
                            reuired
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicISBN" className="ISBN">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="978-0-575-08244-1" 
                            onChange={this.ISBN}
                            reuired
                        />
                    </Form.Group>
                    <div className="addHeader"> Add a book you want </div>
                    <Form.Group controlId="formBasicTitle" >
                        <Form.Label >Title</Form.Label>
                        <Form.Control  className="Title" type="text" 
                            placeholder="The Witcher: The Last Wish" 
                            onChange={this.TitleWant}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Andrzej Sapkowski" 
                            onChange={this.AuthorWant}
                            reuired
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicISBN">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="978-0-575-08244-1" 
                            onChange={this.ISBNWant}
                            reuired
                        />
                    </Form.Group>
                    <Button variant="warning" id="addButton" onClick={() => this.addBook()}>
                       Add
                    </Button>
                    </Form>
                  </center>
                </div>
            </div>
        )
    }
}