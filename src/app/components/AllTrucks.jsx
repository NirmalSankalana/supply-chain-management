import React, { useEffect, useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import { Alert} from "reactstrap";
import { api } from "../../config";
import http from "../../services/httpService";
import Auth from '../../services/user/authService';

function AllTrucks() {
  
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Trucks </h4>
        {/* <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert> */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Truck ID</th> 
                <th>Capacity</th>
                <th>Update</th> 
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* {managers.map((manager,index) => 
                (<tr key={manager['User_ID']}>
                  <td>{manager['Staff_ID']}</td> 
                  <td>{manager['First_Name']}</td>
                  <td>{manager['Last_Name']}</td> 
                  <td>{manager['Role']}</td>
                  <th><button type="button" className="btn btn-warning btn-rounded" onClick={()=>updateData(manager)}>Update</button></th>
                  <th><button type="button" className="btn btn-danger btn-rounded" onClick={()=>deleteData(manager)}>Delete</button></th>
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

export default AllTrucks;
