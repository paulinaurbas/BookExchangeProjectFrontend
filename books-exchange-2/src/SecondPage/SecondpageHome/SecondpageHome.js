import React, { Component } from 'react';
//style
import './SecondpageHome.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Background from './12345.png';
import Menu from '../SecondPageMenu/SecondPageMenu';
import BookTable from '../SecondpageHome/BookTable';
import {Button} from 'react-bootstrap';
import Popup from 'reactjs-popup';
import AddModal from './AddModal/AddModal';

//import Menu from './MenuFol/Menu';
//import BookSearching from './SearchFol/BookSearching'

var sectionStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover'
};

class Home extends Component {
  render() {
  return (
    <div className = "AppAll">
    <div className = "menu">
    <Menu> </Menu> 
    </div>
    <section style={ sectionStyle }>
  
      <div className = "ShelvesPart">
      <div className = "ShelfBookYouWant">
        <h3> Your books </h3>
        <BookTable > </BookTable>
        <Popup modal trigger={open=> (<Button className="buttons" variant="warning">Add</Button>)} >
          {close => <AddModal close={close} addType={1} />}
        </Popup>
      </div>
      <div className = "ShelfBookYouExchange">
        <h3> Books you want </h3>
        <BookTable> </BookTable>
        <Popup modal trigger={open=> (<Button className="buttons" variant="warning">Add</Button>)} >
          {close => <AddModal close={close} addType={0} />}
        </Popup>
      </div>
      </div> 
  </section>
      </div>
  );
}

}
export default Home;