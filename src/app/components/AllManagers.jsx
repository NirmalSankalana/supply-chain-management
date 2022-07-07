import axios from 'axios';
import React, { Component, useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import managerServices from '../../services/admin/managerServices';
import ViewAllTable from "./common/ViewAllTable";
import { api } from '../../config'


function AllManagers() {
    const apiEndpoint = api.apiUrl + '/admin/getManagers';
    const [managers, setManagers] = useState([])
    useEffect(() => {
        axios.get(apiEndpoint).then(res => {
            console.log(res)
            let manager_data = res.data.result.result;

            // console.log(manager_data);
            setManagers(manager_data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    console.log(managers)



    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Managers</h4>
       
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Staff ID</th>
                            <th>User ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                            managers.map(manager => {
                                <tr key={manager.User_ID}>
                                    <td>{manager.Staff_ID}</td>
                                    <td>{manager.First_Name}</td>
                                    <td>{manager.Last_Name}</td>
                                    <td>{manager.Role}</td>
                                </tr>
                            })
                            }
                        
                        <tr>
                            <td>Jacob</td>
                            <td>53275531</td>
                            <td>12 May 2017</td>
                            <td><label className="badge badge-danger">Pending</label></td>
                            <td><label className="badge badge-danger">Pending</label></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <ul>
                           
        </ul>
      </div >


    )
}


export default AllManagers;