import axios from 'axios'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { api } from '../../config'


class AddRoute extends Component {

    apiEndpoint = api.apiUrl + '/storekeeper/registerRoute'
    constructor(props) {
        super(props)

        this.state = {
            startCity: '',
            endCity: ''
        }
    }

    handleChange =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler =(e) =>{
        e.preventDefault();
        console.log(this.state);
        axios.post(this.apiEndpoint, this.state).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add New Delivery Route</h4>
                        <form className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Start City</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="startCity" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">End City</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="text" name="endCity" />
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

export default AddRoute