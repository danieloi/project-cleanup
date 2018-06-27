import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaystackButton from "react-paystack";
import { EditFieldButton } from "./EditFieldButton";

export class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleClick = () => {
    this.setState({ loading: true });
  };

  onClose = () => {
    this.setState({ loading: false });
  };

  renderService = values => {
    let display = {};

    switch (values.service) {
      case "sanitation":
        display.category = (
          <tr>
            <td className="data-field">Service</td>
            <td>Home Cleaning</td>
          </tr>
        );

        display.sub1 = (
          <tr>
            <td className="data-field">Bedrooms</td>
            <td>{values.bedrooms}</td>
          </tr>
        );

        display.sub2 = (
          <tr>
            <td className="data-field">Restrooms</td>
            <td>{values.restrooms}</td>
          </tr>
        );
        break;

      case "dry_cleaning":
        display.category = (
          <tr>
            <td className="data-field">Service</td>
            <td>Dry Cleaning</td>
          </tr>
        );
        display.sub1 = (
          <tr>
            <td className="data-field">Shirts/Blouses</td>
            <td>{values.tops}</td>
          </tr>
        );

        display.sub2 = (
          <tr>
            <td className="data-field">Trousers/Skirts</td>
            <td>{values.bottoms}</td>
          </tr>
        );
        break;

      case "vehicle":
        display.category = (
          <tr>
            <td className="data-field">Service</td>
            <td>Vehicle Cleaning</td>
          </tr>
        );
        display.sub1 = (
          <tr>
            <td className="data-field">Sedans/Hatchbacks</td>
            <td>{values["sedans"]}</td>
          </tr>
        );

        display.sub2 = (
          <tr>
            <td className="data-field">Pickups/SUVs</td>
            <td>{values.suvs}</td>
          </tr>
        );
        break;

      default:
        break;
    }
    return display;
  };

  render() {
    const { values, onSuccess, onInputChange } = this.props;

    return (
      <div className="col-sm-12 ">
        <div className="divider" />

        <h3 className="center" style={{ display: values.paid ? "none" : "" }}>
          Summary
        </h3>
        <div
          className="card no_padding"
          style={{ display: values.paid ? "" : "none" }}
        >
          <h3 className="question center grey">We're on our way!</h3>
          <div className="answers">
            <p className=""> - A receipt was sent to your email</p>
            <p className=""> - We'll call thirty minutes before we arrive</p>
            <p className=""> - Leaving this page will reset the app</p>
          </div>
        </div>
        <div className="divider" />
        <table className="table table-condensed">
          <tbody>
            <tr>
              <td className="data-field">Location</td>
              <td>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={onInputChange}
                  placeholder="Enter Address Within Abuja"
                />
              </td>
            </tr>
            <tr>
              <td className="data-field">Name</td>
              <td>
                {values.name ? (
                  values.name
                ) : (
                  <EditFieldButton values="/address" />
                )}
              </td>
            </tr>
            <tr>
              <td className="data-field">Phone</td>
              <td>
                {values.phone ? (
                  values.phone
                ) : (
                  <EditFieldButton values="/address" />
                )}
              </td>
            </tr>
            <tr>
              <td className="data-field">Email</td>
              <td>
                {values.email ? (
                  values.email
                ) : (
                  <EditFieldButton values="/address" />
                )}
              </td>
            </tr>
            <tr>
              <td className="data-field">Date</td>
              <td>{values.date}</td>
            </tr>
            <tr>
              <td className="data-field">Time</td>
              <td>{values.time}</td>
            </tr>
            {/*  */}
            {this.renderService(values).category}
            {this.renderService(values).sub1}
            {this.renderService(values).sub2}
            {/*  */}
            <tr>
              <td className="data-field">Hours</td>
              <td>{values.hours}</td>
            </tr>
            <tr>
              <td className="data-field">Total</td>
              <td>{values.price.toLocaleString()} NGN</td>
            </tr>
          </tbody>
        </table>
        <div className="divider" />
        {/* <div className="steps_container"> */}
        {values.paid ? (
          <div className="steps_container">
            <Link to="/order">
              <button className="btn-default nav-steps">NEW</button>
            </Link>
          </div>
        ) : (
          <div className="steps_container">
            <Link to="/address">
              <button className="btn-default nav-steps">BACK</button>
            </Link>
            <div onClick={this.handleClick}>
              {this.state.loading ? (
                <button className="btn-default nav-steps">
                  <div className="spinner">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                  </div>
                </button>
              ) : (
                <PaystackButton
                  text="PAY"
                  class="btn-default nav-steps"
                  callback={onSuccess}
                  close={this.onClose}
                  disabled={false}
                  embed={false}
                  reference={values.reference}
                  email={values.email}
                  amount={values.price * 100}
                  paystackkey={values.key}
                />
              )}
            </div>
          </div>
        )}
      </div>
      //   </div>
    );
  }
}
