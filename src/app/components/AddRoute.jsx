import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { api } from "../../config";
import http from "../../services/httpService";
import Auth from "../../services/user/authService";

class AddRoute extends Component {


  apiEndpoint = api.apiUrl + "/storekeeper/registerRoute";
  token = Auth.getJwt();

  constructor(props) {
    super(props);
    this.state = {
        startCity: "",
        endCity: "",
      };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const apiEndPoint = this.apiEndpoint;
    console.log(apiEndPoint)
    const response = await http.post(apiEndPoint, this.state);
    console.log(response)
  };
  render() {
    return (
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title"> Add New Delivery Route </h4>{" "}
            <form className="" onSubmit={this.submitHandler} >
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      {" "}
                      Start City{" "}
                    </label>{" "}
                    <div className="col-sm-9">
                      <Form.Control type="text" name="startCity" value={this.state.startCity} onChange={this.handleChange} required/>
                    </div>{" "}
                  </Form.Group>{" "}
                </div>{" "}
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      {" "}
                      End City{" "}
                    </label>{" "}
                    <div className="col-sm-9">
                      <Form.Control type="text" name="endCity" value={this.state.endCity} onChange={this.handleChange} required/>
                    </div>{" "}
                  </Form.Group>{" "}
                </div>{" "}
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                {" "}
                Add Route{" "}
              </button>{" "}
              <button className="btn btn-light"> Cancel </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default AddRoute;
