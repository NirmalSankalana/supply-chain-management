import React, { Component, useEffect, useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert, Card, CardBody } from "reactstrap";

import { api } from "../../config";
import http from "../../services/httpService";
import UpdateManager from "./UpdateManager";
import Auth from '../../services/user/authService';

function AllManagers() {
  // const apiEndpoint = api.apiUrl + "/manager/storekeepers";
  
  // const [storeKeepers, setStoreKeeper] = useState([]);
  // const [show, setShow] = useState(false);
  // const [alertMessage, setAlertMessage] = useState('')

  // const history = useHistory()

  // const updateData = (storeKeeper)=>{  
  //   console.log(storeKeeper)
  //   history.push({
  //     pathname:"/manager/update",
  //     state: {storeKeeper:storeKeeper}
  //   })
  // }

  // const deleteData = (storeKeeper)=>{
  //   const endPoint = api.apiUrl + '/delete'
  //   console.log(storeKeeper)
  //   try{
  //     const response = http.delete(endPoint,storeKeeper)
  //     console.log(response)
  //   }catch(ex){
  //     if (ex.response) {
  //       console.log(ex.response);
  //       switch (ex.response.status) {
  //         case 400:
  //           setAlertMessage(ex.response.data.message);
  //           setShow(true)
  //           break;
  //         case 401:
  //           setAlertMessage(ex.response.data.message);
  //           setShow(true)

  //           history.push({
  //             pathname:"/logout"
  //           })
  //           break;
  //         case 404:
  //           setAlertMessage(ex.response.data.message);
  //           setShow(true)

  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  // }

  // useEffect(() => {
  //     http.get(apiEndpoint).then(response =>{
  //       let storekeeper_data = response.data.result.result
  //       // console.log(response.data.result.result)
  //       setStoreKeeper(storekeeper_data);
  //       storeKeepers.map((storeKeeper,index)=>{
  //           console.log(storeKeeper)
  //       })
  //   }).catch(ex=>{
  //     if (ex.response) {
  //       console.log(ex.response);
  //       switch (ex.response.status) {
  //         case 400:
  //           setAlertMessage(ex.response.data.message);
  //           break;
  //         case 401:
  //           setAlertMessage(ex.response.data.message);
  //           console.log(ex.response.data.message)
  //           history.push({
  //             pathname:"/logout"
  //           })

  //           break;
  //         case 404:
  //           setAlertMessage(ex.response.data.message);
  //           break;
  //         default:
  //           break;
  //       }
  //     }})
  // }, []);

  // const user = Auth.getCurrentUser()
  
  // if(user == null){
  //   return <Redirect to={'/login'} />
  // }

  // if(user.role !== 'MANAGER'){
  //   return <Redirect to={'/dashboard'} />
  // }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Shop Keepers </h4>
        {/* <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert> */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th> 
                <th>Store keeper ID</th>
                <th>First Name </th>
                <th>Last Name </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* {storeKeepers.map((storeKeeper,index) => 
                (<tr key={storeKeeper['User_ID']}>
                  <td>{storeKeeper['Storekeeper_ID']}</td> 
                  <td>{storeKeeper['First_Name']}</td>
                  <td>{storeKeeper['Last_Name']}</td> 
                  <th><button type="button" className="btn btn-warning btn-rounded" onClick={()=>updateData(storeKeeper)}>Update</button></th>
                  <th><button type="button" className="btn btn-danger btn-rounded" onClick={()=>deleteData(storeKeeper)}>Delete</button></th>
                </tr>)
              )} */}
            </tbody>
          </table>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}

export default AllManagers;
