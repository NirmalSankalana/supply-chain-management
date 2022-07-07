import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { api } from "../../config.js";
import httpService from "../../services/httpService.js";
import http from "../../services/httpService";
import Auth from "../../services/user/authService";

function AddManager() {
  const apiEndpoint = api.apiUrl + "admin/register";

  const initialValues = { name: "", email: "", contact: "", join_date: null };
  const [formValues, setformValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (e) => {
    
    let data = {
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      managerRole: managerRole,
    };
    e.preventDefault();
    console.log(this.state);

    //console.log(apiEndPoint)

    const response = await http.post(apiEndpoint, data);
    console.log(response);
  };

  return (
    <div className="col-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Register New Manager</h4>
          <form className="" onSubmit={this.submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">First Name</label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Last Name</label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">
                    Manager Role
                  </label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="text"
                      name="managerRole"
                      value={this.state.managerRole}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button className="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddManager;