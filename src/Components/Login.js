import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordlChange = (e) => {
    console.log("handle passwoord", e.target.value);
    this.setState({ password: e.target.value });
  };
  render() {
    const { email, password } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-light">
            <h3 className="">Login</h3>

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
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={this.handlePasswordChange}
                />
              </div>
              <button type="button" className="btn btn-primary">
                Login
              </button>
              <button type="button" className="btn btn-link">
                Forgot Password
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
