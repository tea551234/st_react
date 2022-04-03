import React, { Component, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom"
import Axios from "axios";

export default function Todoput() {
  const [createname, setcreatename] = React.useState([]);
  const [createcalories, setcreatecalories] = React.useState([]);
  const [createfat, setcreatefat] = React.useState([]);
  const [createcarbs, setcreatecarbs] = React.useState([]);
  const [createprotein, setcreateprotein] = React.useState([]);

  const namechang = (e) => {
    setcreatename(e.currentTarget.value);
  };

  const calorieschang = (e) => {
    setcreatecalories(e.currentTarget.value);
  };

  const fatchang = (e) => {
    setcreatefat(e.currentTarget.value);
  };

  const carbschang = (e) => {
    setcreatecarbs(e.currentTarget.value);
  };

  const proteinchang = (e) => {
    setcreateprotein(e.currentTarget.value);
  };


  const sampleLocation = useLocation();
  console.log("🚀 ~ file: Todoput.jsx ~ line 34 ~ Todoput ~ sampleLocation", sampleLocation.pathname)
  console.log("🚀 ~ file: Todoput.jsx ~ line 34 ~ Todoput ~ sampleLocation", sampleLocation)


  
  const [mylist, setMylist] = React.useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8080${sampleLocation.pathname}`).then((res) => {
      setMylist(res.data);
    //   console.log(
    //     "🚀 ~ file: Todoput.jsx ~ line 36 ~ Axios.get ~ res.data",
    //     res.data
    //   );
    });
  }, [setMylist]);

  const okButton = async (e) => {
    const myid = mylist.id;
    const addlist = {
      createname,
      createcalories,
      createfat,
      createcarbs,
      createprotein,
      myid,
    };
    console.log(addlist);
    await Axios.put("http://localhost:8080/put", addlist);
    window.location = "/";
  };

  return (
    <Fragment>
      <div className="container">
        <h1>待辦事項清單 - 修改 </h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form action="/put" method="post">
              <div className="form-group">
                <label className="control-label" htmlFor="Name">
                  Name:{mylist.name}
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="Name"
                  name="Name"
                  value={createname}
                  onChange={namechang}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="calories">
                  calories
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="calories"
                  name="calories"
                  value={createcalories}
                  onChange={calorieschang}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="fat">
                  fat
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="fat"
                  name="fat"
                  value={createfat}
                  onChange={fatchang}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="carbs">
                  carbs
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="carbs"
                  name="carbs"
                  value={createcarbs}
                  onChange={carbschang}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="protein">
                  protein
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="protein"
                  name="protein"
                  value={createprotein}
                  onChange={proteinchang}
                />
              </div>

              <div className="form-group">
                <input
                  onClick={okButton}
                  type="button"
                  value="確定"
                  className="btn btn-outline-primary"
                />{" "}
                |
                <a href="/" className="btn btn-outline-info">
                  取消
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
