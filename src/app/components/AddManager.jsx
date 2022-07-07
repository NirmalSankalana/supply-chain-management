import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { api } from '../../config.js'
import httpService from '../../services/httpService.js';
import http from "../../services/httpService";
import Auth from "../../services/user/authService";


class AddManager extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            managerRole: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    apiEndpoint = api.apiUrl + "admin/register";
    token = Auth.getJwt();
  
    handleChange =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler =async (e) =>{
        e.preventDefault();
        console.log(this.state);
        const response = await httpService.post(this.apiEndpoint, this.state)

    }

    render() {
        const{username, password, firstName, lastName, managerRole}=  this.state;
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
                                            <Form.Control type="text" name="username" value={username} onChange={this.handleChange} required />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="password" name="password" value={password} onChange={this.handleChange} required/>
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">First Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="firstName" value={firstName} onChange={this.handleChange} required />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Last Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="lastName" value={lastName} onChange={this.handleChange} required />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Manager Role</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="managerRole" value={managerRole} onChange={this.handleChange} required />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button className="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default AddManager