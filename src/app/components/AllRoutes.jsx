import React, { useEffect, useState } from "react";
// import { Alert, Toast } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import {api} from "../../config";
import Auth from '../../services/user/authService';
import http from "../../services/httpService";
import axios from "axios";
import {Alert} from "reactstrap";



function AllRoutes(){
  const apiEndpoint = api.apiUrl + "/storekeeper/routes";
  
  const [deliveryRoutes, setDeliveryRoutes] = useState([]);
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  const updateData = (deliveryRoute)=>{  
    console.log(deliveryRoute)
    history.push({
      pathname:"/storekeeper/update-route",
      state: {deliveryRoute:deliveryRoute}
    })
  }

  const deleteData =async (deliveryRoute)=>{
    const endPoint = api.apiUrl + '/storekeeper/deleteRoute'
    console.log(deliveryRoute['Route_ID'])
    const token = localStorage.getItem('token')
    const deleteForm =  {routeId:deliveryRoute['Route_ID']}
    console.log(deleteForm)
    try{
      // const response =await axios.delete(,{headers:{Authorization: `Bearer ${token}`,}}, data:deleteForm,)
      
      const response =await  axios.delete(endPoint, {headers: {Authorization: `Bearer ${token}`,},data: deleteForm,})
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
    console.log("Useeffect"+localStorage.getItem("token")) 
    const token = localStorage.getItem("token")     
    axios.get(apiEndpoint,{headers:{Authorization: `Bearer ${token}`}})
    .then(response =>{
        let delivery_routes_data = response.data.result
        console.log(delivery_routes_data)
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
            console.log(ex.response.data)
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
                <th>Route Id</th> 
                <th>End city</th>
                <th>End city </th>
                
              </tr>
            </thead>
            <tbody>
              {deliveryRoutes.map((route,index) => 
                (<tr key={route['Route_ID']}>
                  <td>{route['Route_ID']}</td> 
                  <td>{route['Start_City']}</td>
                  <td>{route['End_City']}</td> 
                  
                  <th><button type="button" className="btn btn-warning btn-rounded" onClick={()=>updateData(route)}>Update</button></th>
                  <th><button type="button" className="btn btn-danger btn-rounded" onClick={()=>deleteData(route)}>Delete</button></th>
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

export default AllRoutes;