import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory,Redirect } from "react-router-dom";
import { api } from "../../config.js";
import http from "../../services/httpService";
import axios from "axios";
import Auth from "../../services/user/authService";
import {Alert} from "reactstrap";

function UpdateStoreKeeper(props) {
  const apiEndpoint = api.apiUrl + "/manager/update";
  const oldStoreKeeper = props.history.location.state.storekeeper;
  const history = useHistory()
  const initialValues = { username: oldStoreKeeper['Username'], fName: oldStoreKeeper['First_Name'], lName: oldStoreKeeper['Last_Name']};
  
  const [formValues, setformValues] = useState(initialValues);
  const [showErr, setShowErr] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (e) => {
    
    e.preventDefault();
    console.log(formValues);

    console.log(apiEndpoint)
    try{
      // const response = await http.post(apiEndpoint, formValues);
      let token = localStorage.getItem("token");
      const response = await axios.post(apiEndpoint, {headers: { Authorization: `Bearer ${token}` }})
      console.log(response);
      if(response.statusCode === 200){
        setformValues(initialValues)
        setShowErr(false);
        setShowPass(true)
        setAlertMessage("Successfully Updated!");
      }
    }catch(ex){
      if (ex.response) {
        console.log(ex.response);
        switch (ex.response.status) {
          case 400:
            setShowPass(false)
            setShowErr(true);
            setAlertMessage(ex.response.data.message);
            break;
          case 401:
            setShowPass(false)
            setShowErr(true);
            setAlertMessage(ex.response.data.message);
            history.push({
              pathname:"/logout"
            })

            break;
          case 404:
            setShowPass(false)
            setShowErr(true);
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

  if(user.role !== 'MANAGER'){
    return <Redirect to={'/logout'} />
  }

  // if (user){
  //   return <Redirect to="/dashboard" />
  // }
  return (
    <div className="col-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Update Storekeeper</h4>
          <Alert isOpen={showErr} color='danger'>
                  <p>{alertMessage}</p>
        </Alert>
        <Alert isOpen={showPass} color='success'>
                  <p>{alertMessage}</p>
        </Alert>
          <form className="" onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">User Name</label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="text"
                      name="username"
                      value={formValues.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
              {/* <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <Form.Control
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </div> */}
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
            </div>

            <button type="submit" className="btn btn-primary mr-2">
              Update Shop Keeper
            </button>
            {/* <button className="btn btn-light">Cancel</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default UpdateStoreKeeper;