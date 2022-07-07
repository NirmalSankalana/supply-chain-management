import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { api } from '../../config.js'



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
    }

    handleChange =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler =(e) =>{
        e.preventDefault();
        console.log(this.state);
        axios.post(`http://localhost:5000/admin/register`, this.state).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
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
                                        <label className="col-sm-3 col-form-label">User Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="username" value={username} onChange={this.handleChange} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="password" name="password" value={password} onChange={this.handleChange}/>
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">First Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="firstName" value={firstName} onChange={this.handleChange} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Last Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="lastName" value={lastName} onChange={this.handleChange} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Manager Role</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="managerRole" value={managerRole} onChange={this.handleChange} />
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