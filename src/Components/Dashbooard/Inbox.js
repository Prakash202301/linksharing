import React, { Component } from "react";

export default class Inbox extends Component {
  render() {
    return (
      <div className="card">
        <h6 className="card-header">inbox</h6>
        <p className="card-title ml-3">
          you are invite to subscribe this topic
        </p>
        <p className="card-title ml-3">please subscribe it</p>
        <div>
          <span type="button" className="btn btn-link">
            Download
          </span>

          <span type="button" className="btn btn-link">
            view full site
          </span>

          <span type="button" className="btn btn-link">
            Mark as read
          </span>
          <span type="button" className="btn btn-link">
            View post
          </span>
        </div>
      </div>
    );
  }
}
