import React, { Component } from 'react'


class Navnar extends Component {
  state = {}


  render() {
    return (
      <div className='fixed-top col-12 '  >
        <nav className="nav">
          <a className="nav-link active col-4" aria-current="page" href="#">Active</a>
          <a className="nav-link col-4"   href="#">Link</a>
          <a className="nav-link col-4" href="#"></a>
        </nav>
      </div>
    );
  }
}

export default Navnar;