import React from "react";
import { Toast } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import {api} from "../../config";
import Auth from '../../services/user/authService';




function AllRoutes(){
    const apiEndpoint = api.apiUrl + "/"

        return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Routes </h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Route ID</th> 
                <th>Start City</th>
                <th>End City</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
      <ul></ul>
    </div>
        );
    }

export default AllRoutes;