import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TotalDisplay } from "../TotalDisplay/TotalDisplay";

class NextBack extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    const paths = ["/order", "/apppointment", "/address", "/summary"];

    switch (match.path) {
      case "/order":
        this.state.Back.display = false;
        this.state.Next.to = "/appoint";
    }
    this.state = {
      Back: {
        display: true,
        to: ""
      },
      Next: {
        display: true,
        to: ""
      },
      TotalDisplay: true
    };
  }

  assignStates = () => {};

  render() {
    <div className="steps_container">
      <Link to="/appointment">
        <button className="btn-default nav-steps">BACK</button>
      </Link>
      <Link to="/summary">
        <button className="btn-default nav-steps">NEXT</button>
      </Link>
    </div>;
  }
}
