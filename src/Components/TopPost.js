import React, { Component } from "react";

export default class TopPost extends Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">{this.props.title}</h5>
        <div className="card-body">
          <h5 className="card-title">this post is about boootstrap</h5>
          <p className="card-text">
            bootstrap is very powerfull tool for creating ui beutiful
          </p>
          <a href="#" className="btn btn-outline-info">
            view post
          </a>
        </div>
      </div>
    );
  }
}
