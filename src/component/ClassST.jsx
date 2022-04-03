import React, { Component, FormEvent } from "react";
class ClassST extends Component {
  state = {};
  render() {
    fetch("http://localhost:8080/data",{
        method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    return <FormEvent>
      <p></p>
    </FormEvent>;
  }
}

export default ClassST;
