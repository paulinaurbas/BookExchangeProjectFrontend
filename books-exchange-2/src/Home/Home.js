import React, { Component } from 'react';
//style
import './Home.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm/LoginForm'
//components
import Background from './Books.png';
import RegisterBackground from './latawce.png';
import Login from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Quotes from './Quotes/Quotes';


//import Menu from './MenuFol/Menu';
//import BookSearching from './SearchFol/BookSearching'

var sectionStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover'
};
var sectionStyleRegister = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${RegisterBackground })`,
  backgroundSize: 'cover'
};
class Home extends Component {

  render() {
    
  return (
    
    <div className = "AppAll">
      <div className = "Only">
      <div className = "ImageBox">
      <section style={ sectionStyle }>
      <div className = "menu">
     {/* <Menu> </Menu> */}
  </div>
  <div className = "LoginBox" id = "home">
  <h4> Log in </h4>
  <Login></Login>
  </div>
  </section>
  </div>
<div className = "QuotesDV" id ="Quotes">
  <Quotes> </Quotes>
  </div>
  <div className = "Register" id = "Register">
  <section style={ sectionStyleRegister }>
  <RegisterForm> </RegisterForm>
  </section>
</div>
  </div>
  </div>
  );
}

}
export default Home;