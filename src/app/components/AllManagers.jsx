import React, { Component, useEffect, useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert, Card, CardBody } from "reactstrap";

import { api } from "../../config";
import http from "../../services/httpService";
import UpdateManager from "./UpdateManager";
import Auth from '../../services/user/authService';

function AllManagers() {
  const apiEndpoint = api.apiUrl + "/admin/getManagers";
  
  const [managers, setManagers] = useState([]);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  const updateData = (manager)=>{  
    console.log(manager)
    history.push({
      pathname:"/admin/update",
      state: {manager:manager}
    })
  }

  const deleteData = (manager)=>{
    const endPoint = api.apiUrl + '/delete'
    console.log(manager)
    try{
      const response = http.delete(endPoint,manager)
      console.log(response)
    }catch(ex){
      if (ex.response) {
        console.log(ex.response);
        switch (ex.response.status) {
          case 400:
            setAlertMessage(ex.response.data.message);
            setShow(true)
            break;
          case 401:
            setAlertMessage(ex.response.data.message);
            setShow(true)

            history.push({
              pathname:"/logout"
            })
            break;
          case 404:
            setAlertMessage(ex.response.data.message);
            setShow(true)

            break;
          default:
            break;
        }
      }
    }
  }

  useEffect(() => {
      http.get(apiEndpoint).then(response =>{
        let manager_data = response.data.result.result
        // console.log(response.data.result.result)
        setManagers(manager_data);
        managers.map((manager,index)=>{
            console.log(manager)
        })
    }).catch(ex=>{
      if (ex.response) {
        console.log(ex.response);
        switch (ex.response.status) {
          case 400:
            setAlertMessage(ex.response.data.message);
            break;
          case 401:
            setAlertMessage(ex.response.data.message);
            console.log(ex.response.data.message)
            history.push({
              pathname:"/logout"
            })

            break;
          case 404:
            setAlertMessage(ex.response.data.message);
            break;
          default:
            break;
        }
      }})
  }, []);

  const user = Auth.getCurrentUser()
  
  if(user == null){
    return <Redirect to={'/login'} />
  }

  if(user.role !== 'ADMIN'){
    return <Redirect to={'/dashboard'} />
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Managers </h4>
        <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Staff ID</th> 
                <th>First Name </th>
                <th>Last Name </th>
                <th>Role</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager,index) => 
                (<tr key={manager['User_ID']}>
                  <td>{manager['Staff_ID']}</td> 
                  <td>{manager['First_Name']}</td>
                  <td>{manager['Last_Name']}</td> 
                  <td>{manager['Role']}</td>
                  <th><button onClick={()=>updateData(manager)}>Update</button></th>
                  <th><button onClick={()=>deleteData(manager)}>Delete</button></th>
                </tr>)
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}

export default AllManagers;
