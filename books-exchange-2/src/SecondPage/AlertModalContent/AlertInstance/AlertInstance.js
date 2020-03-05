import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./AlertInstance.css";

var id_accept;
var id_decline;
var id_postpone;
var id_clock;
var id_tick;
var id_cross;
var closeCount = 0;
const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export default class AlertInstance extends Component {
  accept(event) {
    id_decline = "declineButton" + this.props.index;
    id_accept = "acceptButton" + this.props.index;
    id_postpone = "postponeButton" + this.props.index;
    id_tick = "tick" + this.props.index;

    document.getElementById(id_decline).hidden = true;
    document.getElementById(id_accept).hidden = true;
    document.getElementById(id_postpone).hidden = true;
    document.getElementById(id_tick).hidden = false;

    closeCount += 1;
    if (closeCount == this.props.count) {
      sleep(500).then(() => {
        {
          this.props.close();
        }
      });
    }
  }

  decline(event) {
    id_decline = "declineButton" + this.props.index;
    id_accept = "acceptButton" + this.props.index;
    id_postpone = "postponeButton" + this.props.index;
    id_cross = "cross" + this.props.index;

    document.getElementById(id_decline).hidden = true;
    document.getElementById(id_accept).hidden = true;
    document.getElementById(id_postpone).hidden = true;
    document.getElementById(id_cross).hidden = false;

    closeCount += 1;
    if (closeCount == this.props.count) {
      sleep(500).then(() => {
        {
          this.props.close();
        }
      });
    }
  }

  postpone(event) {
    id_decline = "declineButton" + this.props.index;
    id_accept = "acceptButton" + this.props.index;
    id_postpone = "postponeButton" + this.props.index;
    id_clock = "clock" + this.props.index;

    document.getElementById(id_decline).hidden = true;
    document.getElementById(id_accept).hidden = true;
    document.getElementById(id_postpone).hidden = true;
    document.getElementById(id_clock).hidden = false;

    closeCount += 1;
    if (closeCount == this.props.count) {
      sleep(500).then(() => {
        {
          this.props.close();
        }
      });
    }
  }

  render() {
    id_accept = "acceptButton" + this.props.index;
    id_decline = "declineButton" + this.props.index;
    id_postpone = "postponeButton" + this.props.index;
    id_tick = "tick" + this.props.index;
    id_cross = "cross" + this.props.index;
    id_clock = "clock" + this.props.index;

    return (
      <div className="alertInstance">
        AlertID: {this.props.alertID}
        Tile Give: {this.props.titleGive}
        Author Give: {this.props.authorGive}
        Quality Give: {this.props.qualityGive}
        ISBN Give: {this.props.isbnGive}
        Title take: {this.props.titleTake}
        Author take: {this.props.authorTake}
        Quality take: {this.props.qualityTake}
        ISBN take: {this.props.isbnTake}
        User email take: {this.props.userEmailTake}
        <div id={id_tick} className="tick" hidden>
          ✓
        </div>
        <div id={id_cross} className="cross" hidden>
          ✘
        </div>
        <div id={id_clock} className="clock" hidden>
          ⧗
        </div>
        <Button
          className="declineButton"
          id={id_decline}
          onClick={() => this.decline()}
          variant="primary"
          type="submit"
        >
          Decline
        </Button>
        <Button
          className="acceptButton"
          id={id_accept}
          onClick={() => this.accept()}
          variant="primary"
          type="submit"
        >
          Accept
        </Button>
        <Button
          className="postponeButton"
          id={id_postpone}
          onClick={() => this.postpone()}
          variant="primary"
          type="submit"
        >
          Postpone
        </Button>
      </div>
    );
  }
}
