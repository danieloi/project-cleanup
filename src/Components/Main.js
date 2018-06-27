import React, { Component } from "react";
import { PanelsContainer } from "./PanelsContainer";
import { fire } from "../config/fire";
import { NavSteps } from "./NavSteps";
import { calculateHours, calculatePrice, initializeApp } from "./helpers";

export class Main extends Component {
  constructor(props) {
    super(props);
    const freshDetails = initializeApp();

    this.state = {
      details: freshDetails
    };
  }

  onSuccess = () => {
    // For persisting Order details to Database
    const db = fire.database();
    const ordersRef = db.ref().child("Orders");
    const newOrderRef = ordersRef.push();
    const details = Object.assign({}, this.state.details, {
      paid: true
    });
    newOrderRef.set(details);

    this.setState({ details });
  };

  refreshApp = () => {
    const refreshedDetails = initializeApp();

    const details = refreshedDetails;
    console.log("App Refreshed!!!\n");
    console.log(`Here's the refreshed time ${refreshedDetails.time} \n`);

    this.setState({ details });
  };

  onInputChange = evt => {
    let details = this.state.details;
    details[evt.currentTarget.name] = evt.currentTarget.value;
    console.log(`Shots...no. Events fired!!!\n
    name: ${evt.currentTarget.name} \n
    value: ${evt.currentTarget.value}\n
    `);

    const hours = calculateHours(details);
    const price = calculatePrice(hours);
    details.price = price;
    details.hours = hours;
    this.setState({ details });
  };

  render() {
    let display = {};
    if (this.state.details.paid) {
      display.initial = "none";
    }

    if (
      window.location.pathname === "/about" ||
      window.location.pathname === "/faqs"
    ) {
      display.other = true;
    }

    return (
      //store location in state???
      //it's probably bad practice somehow...
      //actually it probably isn't.
      //who gets to decide what's good and bad practice anyway
      //
      <main role="main" className="">
        <NavSteps display={display} />
        <div className="contain">
          <div className="row">
            <PanelsContainer
              onInputChange={this.onInputChange}
              details={this.state.details}
              onSuccess={this.onSuccess}
              refreshApp={this.refreshApp}
              onClose={this.onClose}
            />
          </div>
        </div>
      </main>
    );
  }
}
