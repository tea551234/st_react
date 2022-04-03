import Axios from "axios";
import React, { Component, useState, useEffect, Fragment } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function TodoTable2() {
  const [mylist, setMylist] = React.useState([]);
  const [expand, setexpand] = React.useState(true);

  const handleExpandClick = () => {
    console.log(expand);
    setexpand(!expand);
  };

  useEffect(() => {
    fetch("http://localhost:8080/data", { method: "GET" })
      .then((response) => response.json())
      .then((response) => setMylist(response));
  }, [setMylist]);

  //   useEffect(() => {
  //     Axios.get("http://localhost:8080/data").then((res) => {
  //       setMylist(res.data);
  //     });
  //   }, [setMylist]);

  const deleteTaskHandler = (taskId) => {
    setMylist(mylist.filter(({ id }) => taskId !== id));
    var url = "http://localhost:8080/todo/delete/" + taskId;
    Axios.delete(url);
  };
  return (
    <Fragment>
      <button type="button" className="btn btn-success">
        <a id="createbtn" href="/create">
          新增
        </a>
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <button onClick={handleExpandClick}>按我</button>
            </th>
            <th scope="col">name</th>
            <th scope="col">calories</th>
            <th scope="col">fat</th>
            <th scope="col">carbs</th>
            <th scope="col">protein</th>
          </tr>
        </thead>
        <tbody>
          {mylist.map((x) => (
            <tr key={x.id}>
              <th scope="row">{x.id}</th>
              <td>{x.name}</td>
              <td>{x.calories}</td>
              <td>{x.fat}</td>
              <td>{x.carbs}</td>
              <td>{x.protein}</td>
              <td>
                <button onClick={() => deleteTaskHandler(x.id)}>
                  {" "}
                  <AiFillDelete />{" "}
                </button>
              </td>
              <a href={`/put/${x.id}`} className="btn btn-outline-primary ">
                編輯
              </a>{" "}
              |
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
