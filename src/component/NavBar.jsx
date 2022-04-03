import React, { Component } from "react";
import "../scss/styles.scss";

class Navnar extends Component {
  state = {};

  render() {
    return (
      <div className="fixed-top col-12 ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
              <div class="navbar-nav">
               
                <a class="nav-link" href="#">
                  about me
                </a>
                <a class="nav-link" href="#">
                  作品集
                </a>
                <a class="nav-link" href="#">
                  聯絡我
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navnar;
