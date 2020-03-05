import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Home from "../Home";
//import Aux from '../hoc/Aux';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  async submitHandler(event) {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:8080/JavaServlets-EE7/LoginServlet",
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
          password: this.state.password
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
      <div>
        <center>
          <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                className="Login"
                placeholder="Login"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button id="LoginButton" variant="primary" type="submit">
              Submit
            </Button>
            <Button
              href="#Register"
              id="RegisterButton"
              variant="primary"
              type="button"
            >
              Register
            </Button>
          </Form>
        </center>
      </div>
    );
  }
}
/*

const LoginForm = (props) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
return (
  <Aux>
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" 
      placeholder="Enter email" 
      value={email}
      onChange={e => setEmail(e.target.value)} 
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      placeholder="Password" 
      value={password}
      onChange={e => setPassword(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button id = "LoginButton" disabled={!validateForm()} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Aux>
  )
}
export default LoginForm */
