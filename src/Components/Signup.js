/*
import React, { Component } from "react";

export default class Singup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    cofirmPassword: "",
    photo: null,
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handlePhotoChange = (e) => {
    const file = e.target.files[0];
    this.setState({ photo: file });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
  };
  render() {
    const { firstName, lastName, email, password, cofirmPassword } = this.state;
    return (
      <div>
        <h3>Registration</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                style={{ width: "300px" }} // Increase the width as needed
                value={firstName}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                style={{ width: "300px" }} // Increase the width as needed
                value={lastName}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                style={{ width: "300px" }} // Increase the width as needed
                value={email}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                style={{ width: "300px" }} // Increase the width as needed
                value={password}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Confirm Password:</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                style={{ width: "300px" }} // Increase the width as needed
                value={cofirmPassword}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Photo:</label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control-file"
                onChange={this.handlePhotoChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
*/
import React, { Component } from "react";

export default class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("handle inputr", name, value);
    this.setState({ [name]: value });
  };

  handlePhotoChange = (e) => {
    const file = e.target.files[0];
    this.setState({ photo: file });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    // Add your form submission logic here
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword } =
      this.props;

    return (
      <div>
        <h3 className="m-1">Registration</h3>
        <form onSubmit={this.handleSubmit} className="form-horizontal m-3">
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              First name:
            </label>
            <input
              type="email"
              className="form-control "
              id="email"
              value={firstName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3 ">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={lastName}
              onChange={this.handleInputChange}
            />
          </div>
          {/*  */}
          <div className="mb-3 ">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="mb-3 ">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              className=" form-control "
              id="password"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Photo:</label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control-file"
                onChange={this.handlePhotoChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
