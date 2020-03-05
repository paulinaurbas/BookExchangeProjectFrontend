import React, { Component, useEffect, useState } from "react";
import AlertInstance from "./AlertInstance/AlertInstance";
import "./AlertModalContent.css"; /*
  return alertList.map(
    ({
      alertID,
      titleGive,
      authorGive,
      qualityGive,
      isbnGive,
      titleTake,
      authorTake,
      qualityTake,
      isbnTake,
      userEmailTake,
      index,
      count,
      close
    }) => (
      <AlertInstance
        alertID={alertID}
        titleGive={titleGive}
        authorGive={authorGive}
        qualityGive={qualityGive}
        isbnGive={isbnGive}
        titleTake={titleTake}
        authorTake={authorTake}
        qualityTake={qualityTake}
        isbnTake={isbnTake}
        userEmailTake={userEmailTake}
        index={index}
        count={count}
        close={props.close}
      />
    )
  );
};*/
/*
const Alerts = props => {
  const [alertList, setBookList] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  var elements = [];
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8080/JavaServlets-EE7/Alerts`
        );
        // console.log(await res.text())
        const data = await res.json();
        setBookList(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return "spinner";
  }

  if (error) {
    return "error occurred :( try again";
  }
  var j = alertList.length;
  var text = [];
  for (var i = 0; i < j; i++) {
    text.push("Alert o numerze: " + (i + 1));
  }
  /*
  for (var m = 0; m < alertList.length; m++) {
    elements.push(
      <AlertInstance
        alertID={alertList.alertID}
        titleGive={alertList.titleGive}
        authorGive={alertList.authorGive}
        qualityGive={alertList.qualityGive}
        isbnGive={alertList.isbnGive}
        titleTake={alertList.titleTake}
        authorTake={alertList.authorTake}
        qualityTake={alertList.qualityTake}
        isbnTake={alertList.isbnTake}
        userEmailTake={alertList.userEmailTake}
        index={i}
        count={j}
        close={props.close}
      />
    );
  }*/ //export default Alerts;

var count;

export default class AlertModalContent extends Component {
  render() {
    count = 1;
    var text = [];
    var elements = [];

    for (var i = 0; i < count; i++) {
      text.push("Alert o numerze: " + (i + 1));
    }

    for (var i = 0; i < count; i++) {
      elements.push(
        <AlertInstance
          text={text[i]}
          index={i}
          count={count}
          close={this.props.close}
        />
      );
    }

    return (
      <div className="alertModal">
        <div className="alertHeader"> Alerts </div>
        <div className="alertContent">
          {elements.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </div>
      </div>
    );
  }
}
