import React, { Component } from "react";

export default class SendInvitation extends Component {
  state = {
    selectedValue: null,
    email: "",
  };
  cars = ["Volvo", "Saab", "Fiat", "Audi", "huyndai", "bajaj"];

  handleToggle = (value) => {
    this.setState({
      selectedValue: value,
    });
  };
  renderOptions = () => {
    return this.cars.map((car) => (
      <option key={car} value={car}>
        {car}
      </option>
    ));
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("handle inputr", name, value);
    this.setState({ [name]: value });
  };
  render() {
    const { email } = this.props;
    return (
      <div className="card mt-1">
        <h7 className="m-3">Send invite</h7>
        <form className="form-horizontal m-3">
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email/Username:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <div>
          <div className="m-3">
            <label className="mr-3">topic:</label>
            <select>{this.renderOptions()}</select>
          </div>
        </div>
        <div className="m-3">
          <span
            type="button"
            className="btn btn btn-outline-secondary btn-sm mr-3"
          >
            Send invite
          </span>
          <span type="button" className="btn btn btn-outline-secondary btn-sm">
            Cancle
          </span>
        </div>
      </div>
    );
  }
}
