import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory,Redirect } from "react-router-dom";
import { api } from "../../config.js";
import http from "../../services/httpService";
import Auth from "../../services/user/authService";
import {Alert} from "reactstrap";
import axios from "axios";


function AddRoute() {
  const apiEndpoint = api.apiUrl + "/storekeeper/registerRoute";
  const history = useHistory()
  const initialValues = { startCity: "", endCity: ""};
  
  const [formValues, setformValues] = useState(initialValues);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const submitHandler = async (e) => {
    
    e.preventDefault();
    console.log(formValues);
    const token = localStorage.getItem('token')
    console.log(apiEndpoint)
    try{
      const response = await axios.post(apiEndpoint, formValues,{headers:{Authorization: `Bearer ${token}`}});
      setShow(true)
      setAlertMessage("New user added");
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

  if(user.role !== 'STOREKEEPER'){
    return <Redirect to={'/logout'} />
  }

  // if (user){
  //   return <Redirect to="/dashboard" />
  // }
  return (
    <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
          <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert>
            <h4 className="card-title"> Add New Delivery Route </h4>
            <form className="" onSubmit={submitHandler} >
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      
                      Start City
                    </label>
                    <div className="col-sm-9">
                      <Form.Control type="text" name="startCity" value={formValues.startCity} onChange={handleChange} required/>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">
                      
                      End City
                    </label>
                    <div className="col-sm-9">
                      <Form.Control type="text" name="endCity" value={formValues.endCity} onChange={handleChange} required/>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                
                Add Route
              </button>
              <button className="btn btn-light"> Cancel </button>
            </form>
          </div>
        </div>
      </div>
  );
}
export default AddRoute;








