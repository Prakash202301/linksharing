import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";
import TopPost from "./TopPost";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border border-dark rounded">
          <span className="navbar-brand">Linksharing</span>
          <form className="form-inline ml-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fa fa-search" aria-hidden="true">
                    enter
                  </i>
                </button>
              </div>
            </div>
          </form>
        </nav>

        <div className="row">
          <div className="col-md-7 offset-md-1 mt-2">
            <TopPost title="Bootsrap" />
            <div className="mt-2">
              <TopPost title="Bootsrap 1" />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="w-100 border border-success-subtle mt-2">
              <Login />
            </div>
            <div className="w-100 mt-3 border border-success-subtle">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
