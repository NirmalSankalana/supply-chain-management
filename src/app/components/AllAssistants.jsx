import React, { useEffect, useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import { Alert } from "reactstrap";

import { api } from "../../config";
import http from "../../services/httpService";
import UpdateAssistant from "./UpdateAssistant";
import Auth from '../../services/user/authService';
import axios from 'axios'

function AllAssistants() {
  const apiEndpoint = api.apiUrl + "/assistant/assistants";
  const [assistants, setAssistants] = useState([]);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  const updateData = (assistant)=>{  
    console.log(assistant)
    history.push({
      pathname:"/assistant/update",
      state: {assistant:assistant}
    })
  }

  const deleteData = (assistant)=>{
    const endPoint = api.apiUrl + '/assistant/deleteA'
    console.log(assistant)
    try{
      const response = http.delete(endPoint,assistant)
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
      const token = localStorage.getItem("token")     

      axios.get(apiEndpoint,{headers:{Authorization: `Bearer ${token}`}}).then(response =>{
        let assistant_data = response.data.result.result
        // console.log(response.data.result.result)
        setAssistants(assistant_data);
        assistants.map((assistant,index)=>{
            console.log(assistant)
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

  if(user.role !== 'ASSISTANT'){
    return <Redirect to={'/dashboard'} />
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Assistants </h4>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {assistants.map((assistant,index) => 
                (<tr key={assistant['ID']}>
                  <td>{assistant['ID']}</td>
                  <td>{assistant['First_Name']}</td>
                  <td>{assistant['Last_Name']}</td> 
                  <th><button type="button" className="btn btn-warning btn-rounded" onClick={()=>updateData(assistant)}>Update</button></th>
                  <th><button type="button" className="btn btn-danger btn-rounded" onClick={()=>deleteData(assistant)}>Delete</button></th>
                </tr>)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllAssistants;
