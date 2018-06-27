import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { About } from "./About/About";
import { Faqs } from "./FAQs/Faqs";
import { Workload } from "./Order/Workload/Workload";
import { Appointment } from "./Order/Appointment/Appointment";
import { DataPage } from "./Order/DataPage/DataPage";
import { Summary } from "./Order/Summary/Summary";

export class Panels extends Component {
  constructor(props) {
    super(props);

    this.props.history.listen(location => {
      console.log("Route Changed!!!\n");
      if (this.props.details.paid) {
        this.props.refreshApp();
      }
    });
  }

  render() {
    const { details, onInputChange, onSuccess, onClose } = this.props;
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/order" />} />
        <Route
          path="/order"
          render={() => (
            <Workload onInputChange={onInputChange} values={details} />
          )}
        />
        <Route
          path="/appointment"
          render={() => (
            <Appointment onInputChange={onInputChange} values={details} />
          )}
        />
        <Route
          path="/address"
          render={() => (
            <DataPage onInputChange={onInputChange} values={details} />
          )}
        />
        <Route
          path="/summary"
          render={() => (
            <Summary
              values={details}
              onSuccess={onSuccess}
              onClose={onClose}
              onInputChange={onInputChange}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/faqs" component={Faqs} />
      </Switch>
    );
  }
}
