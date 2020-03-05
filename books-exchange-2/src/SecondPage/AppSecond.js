import React, { Component, useState, useEffect } from "react";
//style
import "./AppSecond.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./SecondpageHome/SecondpageHome";
import Match from "./SecondPageMatches/SecondPageMatches";
import Popup from "reactjs-popup";
import AlertModalContent from "./AlertModalContent/AlertModalContent";
import Menu from "../SecondPage/SecondPageMenu/SecondPageMenu";
import { Button } from "react-bootstrap";
import AddModal from "../SecondPage/SecondpageHome/AddModal/AddModal";
import Background from "../SecondPage/SecondpageHome/12345.png";
import BookList from "../SecondPage/BookTable";
import BookYouWant from "../SecondPage/BookYouWant";
import BookAll from "../SecondPage/AllExchanges/AllExchanges";
var sectionStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
};

var alerts = true;
function AppSecond() {
  return (
    <div className="App">
      <div className="Home">
        <Popup
          closeOnDocumentClick={false}
          closeOnEscape={false}
          modal
          open={alerts}
        >
          {close => <AlertModalContent close={close} />}
        </Popup>
        <div className="HomePage">
          <div className="menu">
            <Menu> </Menu>
          </div>
          <section style={sectionStyle}>
            <div className="ShelvesPart">
              <div className="ShelfBookYouWant">
                <h3> Your books </h3>
                <BookList></BookList>
              </div>
              <div className="ShelfBookYouExchange">
                <h3> Books you want </h3>
                <BookYouWant></BookYouWant>
              </div>
              <div className="ButtonClassSuper">
                <Popup
                  modal
                  trigger={open => (
                    <Button className="buttons1" variant="warning">
                      Add
                    </Button>
                  )}
                >
                  {close => <AddModal close={close} addType={0} />}
                </Popup>
              </div>
            </div>
          </section>
        </div>
      </div>
      <center>
          <h2>
              All exchanges
          </h2>
          <div className="AllBooks">
            <BookAll></BookAll>
          </div>
          </center>
    </div>
  );
}
export default AppSecond;
