import React, { useEffect, useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import { Alert} from "reactstrap";
import { api } from "../../config";
import http from "../../services/httpService";
import axios from "axios";
import Auth from '../../services/user/authService';

function AllTrains() {

  const apiEndpoint = api.apiUrl + "/manager/trains";
  
  const [trains, setTrains] = useState([]);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  let token = localStorage.getItem("token");

  const updateData = (train)=>{  
    console.log(train)
    history.push({
      pathname:"/updateTrain",
      state: {train:train}
    })
  }

  const deleteData =async (train)=>{
    const endPoint = api.apiUrl + '/manager/deleteTrain';
    console.log(train)
    try{
      // const response = http.delete(endPoint,train)
      const response = await axios.delete(endPoint, {headers: {Authorization: `Bearer ${token}`,},data: {trainId:train['Train_ID']},})
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
      axios.get(apiEndpoint , {headers: { Authorization: `Bearer ${token}` }}).then(response =>{
        let train_data = response.data.result
        console.log(response.data.result)
        setTrains(train_data);
        trains.map((train,index)=>{
            console.log(train)
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

  if(user.role !== 'MANAGER'){
    return <Redirect to={'/dashboard'} />
  }
  
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Managers </h4>
        <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Train ID</th> 
                <th>Start City</th>
                <th>End City</th>
                <th>Capacity </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {trains.map((train,index) => 
                (<tr key={train['Train_ID']}>
                <td>{train['Train_ID']}</td> 
                  <td>{train['Start_City']}</td> 
                  <td>{train['End_City']}</td>
                  <td>{train['Capacity']}</td> 
                  <th><button type="button" className="btn btn-warning btn-rounded" onClick={()=>updateData(train)}>Update</button></th>
                  <th><button type="button" className="btn btn-danger btn-rounded" onClick={()=>deleteData(train)}>Delete</button></th>
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

export default AllTrains;
