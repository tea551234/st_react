import Axios from 'axios'
import React, { Component, useState, useEffect, Fragment } from 'react'





export default function Todocreate() {
    const [createname, setcreatename] = React.useState([])
    const [createcalories, setcreatecalories] = React.useState([])
    const [createfat, setcreatefat] = React.useState([])
    const [createcarbs, setcreatecarbs] = React.useState([])
    const [createprotein, setcreateprotein] = React.useState([])




    const namechang = (e) => {
        setcreatename(e.currentTarget.value);
        // setcreateList(e.currentTarget.value)
    }

    const calorieschang = (e) => {
        setcreatecalories(e.currentTarget.value);
        // setcreateList(e.currentTarget.value)
    }

    const fatchang = (e) => {
        setcreatefat(e.currentTarget.value);
        // setcreateList(e.currentTarget.value)
    }

    const carbschang = (e) => {
        setcreatecarbs(e.currentTarget.value);
        // setcreateList(e.currentTarget.value)
    }

    const proteinchang = (e) => {
        setcreateprotein(e.currentTarget.value);
        // setcreateList(e.currentTarget.value)
    }




    const okButton = async (e) => {
        const addlist = {createname, createcalories, createfat, createcarbs, createprotein}
        console.log(addlist);
        await Axios.post('http://localhost:8080/create', addlist)
        window.location='/'
    }


    return (

        <Fragment>
            <div className="container">
                <h1>待辦事項清單 - 新增</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form action="/Create" method="post">

                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">Name</label>
                                <input className="form-control" type="text" id="Name"
                                    name="Name"
                                    onChange={namechang}
                                    value={createname}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="calories">calories</label>
                                <input className="form-control" type="text" id="calories"
                                    name="calories"
                                    onChange={calorieschang}
                                    value={createcalories}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="fat">fat</label>
                                <input className="form-control" type="text" id="fat"
                                    name="fat"
                                    onChange={fatchang}
                                    value={createfat}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="carbs">carbs</label>
                                <input className="form-control" type="text" id="carbs"
                                    name="carbs"
                                    onChange={carbschang}
                                    value={createcarbs}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="protein">protein</label>
                                <input className="form-control" type="text" id="protein"
                                    name="protein"
                                    onChange={proteinchang}
                                    value={createprotein}
                                />
                            </div>


                            <div className="form-group">
                                <input id="okButton" type="button" value="確定" className="btn btn-outline-primary" onClick={okButton} /> |
                                <a href="/" className="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
