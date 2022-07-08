import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router-dom';
import { api } from '../../config.js'
import http from "../../services/httpService";
import Auth from "../../services/user/authService";
import { Button,FormGroup, Label, Input, Alert, Card, CardBody } from "reactstrap";

function UpdateManager(props) {
    const oldManager = props.history.location.state.manager;
    const apiEndpoint = api.apiUrl + "/admin/register";
    console.log(oldManager)
    const initialValues = { username:oldManager['User_ID'] , fName: oldManager['First_Name'], lName: oldManager['Last_Name'], managerRole: oldManager['Role'] };
    const [formValues, setformValues] = useState(initialValues);
    const [show, setShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState('')
    
    const history = useHistory()

    const handleChange = (e) => {
      const { name, value } = e.target;
      setformValues({ ...formValues, [name]: value });
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(formValues);
      console.log(apiEndpoint)
      try{
        const response = await http.post(apiEndpoint, formValues);
        console.log(response);
      }catch(ex){
        if (ex.response) {
            console.log(ex.response);
            switch (ex.response.status) {
              case 400:
                setShow(true)

                setAlertMessage(ex.response.data.message);
                break;
              case 401:
                setShow(true)

                setAlertMessage(ex.response.data.message);
                history.push({
                    pathname:"/logout"
                  })                
                  break;
              case 404:
                setShow(true)

                setAlertMessage(ex.response.data.message);
                break;
              default:
                break;
            }
          }
         
      }
      
    };
    const user = Auth.getCurrentUser()
  
    if(user == null){
      return <Redirect to={'/login'} />
    }
  
    if(user.role !== 'ADMIN'){
      return <Redirect to={'/dashboard'} />
    }
    return (
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
          <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert>
            <h4 className="card-title">Register New Manager</h4>
            <form className="" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                      <Form.Control
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                        readOnly={true}
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
                        name="fName"
                        value={formValues.fName}
                        onChange={handleChange}
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
                        name="lName"
                        value={formValues.lName}
                        onChange={handleChange}
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
                        value={formValues.managerRole}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Group>
                </div>
              </div>
  
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              {/* <button className="btn btn-light">Cancel</button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default UpdateManager;