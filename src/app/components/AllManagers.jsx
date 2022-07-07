import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import managerServices from "../../services/admin/managerServices";
import ViewAllTable from "./common/ViewAllTable";
import { api } from "../../config";
import http from "../../services/httpService";
import Auth from "../../services/user/authService";

function AllManagers() {
  const apiEndpoint = api.apiUrl + "/admin/getManagers";
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    http.get(apiEndpoint).then(response =>{
        let manager_data = response.data.result.result
        // console.log(response.data.result.result)
        setManagers(manager_data);
        managers.map((manager,index)=>{
            console.log(manager)
        })
    })
  }, []);

//   console.log(managers);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Managers </h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Staff ID</th> 
                <th>User ID</th>
                <th>First Name </th>
                <th>Last Name </th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager,index) => 
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
      <ul></ul>
    </div>
  );
}

export default AllManagers;
