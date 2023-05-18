import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    isDropdownOpen: false,
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Linksharing
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                <i className="fas fa-search"></i> Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/topic">
                <i className="fas fa-tags"></i> Topic
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/invite">
                <i className="fas fa-envelope"></i> Send Invite
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-resource">
                <i className="fas fa-plus"></i> Create Resource
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                onClick={this.toggleDropdown}
              >
                <i className="fas fa-user"></i> Prakash
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right${
                  isDropdownOpen ? " show" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                <button className="dropdown-item">Profile</button>
                <button className="dropdown-item">Users</button>
                <button className="dropdown-item">Topics</button>
                <button className="dropdown-item">Post</button>
                <button className="dropdown-item">Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
