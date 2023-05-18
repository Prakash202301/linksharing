import React, { Component } from "react";

export default class Profilepage extends Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Profile name</h5>
        <div className="card-body">
          <h5 className="card-title">About profile</h5>
          <p className="card-text">subscribed 0 ,share 0</p>
        </div>
      </div>
    );
  }
}
