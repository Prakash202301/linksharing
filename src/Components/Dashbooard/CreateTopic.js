import React, { Component } from "react";

export default class CreateTopic extends Component {
  state = {
    text: "",
    visibility: "public",
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("handle inputr", name, value);
    this.setState({ [name]: value });
  };

  handleChange = (e) => {
    this.setState({
      visibility: e.target.value,
    });
  };

  render() {
    const { text } = this.props;
    return (
      <div className="card">
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            CreateTopic:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={text}
            onChange={this.handleInputChange}
          />
        </div>
        <label className="form-label">
          Visibility :
          <select
            value={this.state.visibility}
            onChange={this.handleChange}
            className="m-3"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>

        <div>
          <span
            type="button"
            className="btn btn btn-outline-secondary btn-sm m-3"
          >
            Save
          </span>
          <span
            type="button"
            className="btn btn btn-outline-secondary btn-sm m-3"
          >
            Cancle
          </span>
        </div>
      </div>
    );
  }
}
