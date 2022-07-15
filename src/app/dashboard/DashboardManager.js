import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { api } from "../../config";
import http from "../../services/httpService";
import Auth from '../../services/user/authService';


function DashboardManager() {
  const apiEndpointStoreKeeper = api.apiUrl + "/manager/storekeepers";
  const apiEndpointTrain = api.apiUrl + "/manager/trains"

  const [storeKeepers, setStoreKeepers] = useState([]);
  const [trains, setTrains] = useState([]);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  useEffect(() => {
    let token = localStorage.getItem('token');
    axios.get(apiEndpointStoreKeeper, {headers: { Authorization: `Bearer ${token}` }}).then(response => {
      let storekeeper_data = response.data.result
      console.log(response.data.result)
      setStoreKeepers(storekeeper_data);
      // storeKeepers.map((storekeeper_data, index) => {
      //   console.log(storekeeper_data)
      // })
    }).catch(ex => {
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
              pathname: "/logout"
            })

            break;
          case 404:
            setAlertMessage(ex.response.data.message);
            break;
          default:
            break;
        }
      }
    })
  }, []);

  useEffect(() => {
    let token = localStorage.getItem('token');
    axios.get(apiEndpointTrain, {headers: { Authorization: `Bearer ${token}` }}).then(response => {
      let train_data = response.data.result
      console.log(response.data.result)
      setTrains(train_data);
      // trains.map((train_data, index) => {
      //   console.log(train_data)
      // })
    }).catch(ex => {
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
              pathname: "/logout"
            })

            break;
          case 404:
            setAlertMessage(ex.response.data.message);
            break;
          default:
            break;
        }
      }
    })
  }, []);

  const user = Auth.getCurrentUser()

  if (user == null) {
    return <Redirect to={'/login'} />
  }

  if (user.role !== 'MANAGER') {
    return <Redirect to={'/dashboard'} />
  }
  return (
    <div>
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>
        <div className='row'>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-0">Store Keepers</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Store Keeper ID</th>
                      <th>First Name </th>
                      <th>Last Name </th>
                    </tr>
                  </thead>
                  <tbody>
                    {storeKeepers.map((storeKeeper, index) =>
                    (<tr key={storeKeeper['User_ID']}>
                      <td>{storeKeeper['User_ID']}</td>
                      <td>{storeKeeper['Storekeeper_ID']}</td>
                      <td>{storeKeeper['First_Name']}</td>
                      <td>{storeKeeper['Last_Name']}</td>
                      

                    </tr>)
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-0">Trains</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      {/* <th>User ID</th> */}
                      <th>Train ID</th>
                      <th>Start City</th>
                      <th>End City</th>
                      <th>Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trains.map((train, index) =>
                    (<tr key={train['Train_ID']}>
                      <td>{train['Train_ID']}</td>
                      <td>{train['Start_City']}</td>
                      <td>{train['End_City']}</td>
                      <td>{train['Capacity']}</td>
                      

                    </tr>)
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default DashboardManager;