import React, { useEffect, useState } from "react";
import { Alert, Toast } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import {api} from "../../config";
import Auth from '../../services/user/authService';
import http from "../../services/httpService";



function AllRoutes(){
  const apiEndpoint = api.apiUrl + "/storekeeper/routes";
  
  const [deliveryRoutes, setDeliveryRoutes] = useState([]);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  const updateData = (deliveryRoute)=>{  
    console.log(deliveryRoute)
    history.push({
      pathname:"/storekeeper/updateRoute",
      state: {deliveryRoute:deliveryRoute}
    })
  }

  const deleteData = (deliveryRoute)=>{
    const endPoint = api.apiUrl + '/delete'
    console.log(deliveryRoute)
    try{
      const response = http.delete(endPoint,deliveryRoute)
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
      http.get(apiEndpoint).then(response =>{
        let delivery_routes_data = response.data.result.result
        console.log(response.data.result.result)
        setDeliveryRoutes(delivery_routes_data);
        deliveryRoutes.map((deliveryRoute,index)=>{
            console.log(deliveryRoute)
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

  if(user.role !== 'STOREKEEPER'){
    return <Redirect to={'/dashboard'} />
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title"> Store Keepers </h4>
        <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Staff ID</th> 
                <th>First Name </th>
                <th>Last Name </th>
                <th>Role</th>
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

export default AllRoutes;