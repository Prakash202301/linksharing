import React, { Component } from "react";

export default class TrendingTopics extends Component {
  render() {
    return (
      <div className="card mt-1">
        <div className="card-body">
          <h6 className="card-title">Trending topics</h6>
          <p className="card-text">topic data</p>
          <span className="card-text m-2">public/private</span>
          <span
            type="button"
            className="btn btn btn-outline-secondary btn-sm mr-3"
          >
            delete
          </span>
          <span type="button" className="btn btn btn-outline-secondary btn-sm">
            unsubscribe
          </span>
        </div>
      </div>
    );
  }
}
