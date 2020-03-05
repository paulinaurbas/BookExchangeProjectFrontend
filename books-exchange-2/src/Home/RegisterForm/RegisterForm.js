import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
 
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      login: "",
      name: "",
      surname: ""
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
 
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleLoginChange(event) {
    this.setState({ login: event.target.value });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSurnameChange(event) {
    this.setState({ surname: event.target.value });
  }
 
  async submitHandler(event) {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:8080/JavaServlets-EE7/RegisterServlet",
      {
        method: "POST", // duzymi literami
        // mode: 'no-cors',
        headers: {
          // mode: 'no-cors',
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods":"GET",
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          login: this.state.login,
          name: this.state.name,
          surname: this.state.surname
        })
      }
    );
    // const result = await response.text();
    const result = await response.json();
    //debugger;
 
    if (result.message == "Not found") {
      alert("Invalid User");
      return;
    }
 
    //this.loginSuccessHandler();
 
    window.location.replace("/exchange");
  }
 
  render() {
    return (
      <div className="UserFormular">
        <h4> Register in our app! </h4>
        <center>
          <Form onSubmit={this.submitHandler}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
              </Form.Group>
 
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
              </Form.Group>
 
              <Form.Group as={Col} controlId="formGridLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="login"
                  placeholder="Enter Login"
                  value={this.state.login}
                  onChange={this.handleLoginChange}
                  required
                />
              </Form.Group>
 
              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  placeholder="Enter Surname "
                  value={this.state.surname}
                  onChange={this.handleSurnameChange}
                  required
                />
              </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I accept private policy"
                required
              />
            </Form.Group>
 
            <Button id="ButtonSummit" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </center>
      </div>
    );
  }
}
//export default RegisterForm