import React, { Component } from "react";

export default class ShareLink extends Component {
  state = {
    isClicked: false,
    email: "",
    description: "",
    selectedTopic: "",
  };

  cars = ["Volvo", "Saab", "Fiat", "Audi"];
  handleTopicClick = (topic) => {
    this.setState({
      selectedTopic: topic,
    });
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("handle inputr", name, value);
    this.setState({ [name]: value });
  };
  renderOptions = () => {
    return this.cars.map((car) => (
      <option key={car} value={car}>
        {car}
      </option>
    ));
  };

  render() {
    const { email, description } = this.props;
    //   const { isClicked } = this.state;
    return (
      <div className="card">
        <h5 className="card-header">{this.props.header}</h5>
        <div className="card-body">
          <div className="mb-3 ">
            <label className="form-label">Link:</label>

            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Description:</label>
            <input
              type="description"
              className="form-control"
              value={description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="m-3">
            <label className="mr-3">topic:</label>
            <select>{this.renderOptions()}</select>
          </div>
          <div>
            <span
              type="button"
              className="btn btn btn-outline-secondary btn-sm m-3"
            >
              Share
            </span>
            <span
              type="button"
              className="btn btn btn-outline-secondary btn-sm m-3"
            >
              Cancle
            </span>
          </div>
        </div>
      </div>
    );
  }
}
