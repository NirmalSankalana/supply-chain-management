import React, { Component, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { api } from "../../config";
import http from "../../services/httpService";
import Auth from '../../services/user/authService';


function DashboardAdmin() {
  const apiEndpoint = api.apiUrl + "/admin/getManagers";

  const [managers, setManagers] = useState([]);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  useEffect(() => {
    http.get(apiEndpoint).then(response => {
      let manager_data = response.data.result.result
      // console.log(response.data.result.result)
      setManagers(manager_data);
      managers.map((manager, index) => {
        console.log(manager)
      })
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

  if (user.role !== 'ADMIN') {
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

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-0">Managers</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Staff ID</th>
                      <th>First Name </th>
                      <th>Last Name </th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {managers.map((manager, index) =>
                    (<tr key={manager['User_ID']}>
                      <td>{manager['Staff_ID']}</td>
                      <td>{manager['First_Name']}</td>
                      <td>{manager['Last_Name']}</td>
                      <td>{manager['Role']}</td>

                    </tr>)
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DashboardAdmin;