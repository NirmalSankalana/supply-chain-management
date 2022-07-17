import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { api } from "../../config";
import http from "../../services/httpService";
import Auth from '../../services/user/authService';


function DashboardStoreKeeper() {
  const apiEndpointDriver = api.apiUrl + "/storekeeper/drivers";
  const apiEndpointAssistant = api.apiUrl + "/storekeeper/assistants";
  const apiEndpointTruck = api.apiUrl + "/storekeeper/trucks";
  const apiEndpointRoute = api.apiUrl + "/storekeeper/routes";


  const [Drivers, setDrivers] = useState([]);
  const [Assistants, setAssistants] = useState([]);
  const [Trucks, setTrucks] = useState([]);
  const [DeliveryRoutes, setRoutes] = useState([]);

  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  useEffect(() => {
    let token = localStorage.getItem('token');
    axios.get(apiEndpointDriver, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
      let driver_data = response.data.result
      console.log(response.data.result)
      setDrivers(driver_data);
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
    axios.get(apiEndpointAssistant, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
      let assistant_data = response.data.result
      console.log(response.data.result)
      setAssistants(assistant_data);
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
    axios.get(apiEndpointTruck, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
      let truck_data = response.data.result
      console.log(response.data.result)
      setTrucks(truck_data);
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
    axios.get(apiEndpointRoute, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
      let route_data = response.data.result
      console.log(response.data.result)
      setRoutes(route_data);
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

  if (user.role !== 'STOREKEEPER') {
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
                <h4 className="card-title mb-0">Drivers</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>First Name </th>
                      <th>Last Name </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Drivers.map((driver, index) =>
                    (<tr key={driver['User_ID']}>
                      <td>{driver['ID']}</td>
                      <td>{driver['First_Name']}</td>
                      <td>{driver['Last_Name']}</td>


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
                <h4 className="card-title mb-0">Assistants</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      {/* <th>User ID</th> */}
                      <th>User ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Assistants.map((assistant, index) =>
                    (<tr key={assistant['User_ID']}>
                      <td>{assistant['User_ID']}</td>
                      <td>{assistant['First_Name']}</td>
                      <td>{assistant['Last_Name']}</td>

                    </tr>)
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-0">Trucks</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Truck Number</th>
                      <th>Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Trucks.map((truck, index) =>
                    (<tr key={truck['Truck_Number']}>
                      <td>{truck['Truck_Number']}</td>
                      <td>{truck['Capacity']}</td>
      


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
                <h4 className="card-title mb-0">Delivery Routes</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      {/* <th>User ID</th> */}
                      <th>Route ID</th>
                      <th>Start City</th>
                      <th>End City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DeliveryRoutes.map((route, index) =>
                    (<tr key={route['Route_ID']}>
                      <td>{route['Route_ID']}</td>
                      <td>{route['Start_City']}</td>
                      <td>{route['End_City']}</td>

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

export default DashboardStoreKeeper;