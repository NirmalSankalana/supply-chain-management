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

export default AllRoutes;