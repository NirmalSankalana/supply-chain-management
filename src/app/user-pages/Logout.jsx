import  React,{ useEffect, useState } from "react";
import { Redirect,useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert, Card, CardBody } from "reactstrap";
// import "../styles/login.css";
import Auth from '../../services/user/authService';


export default function Logout() {
  const [show, setShow] = useState(false);    
  const [alertMessage, setAlertMessage] = useState('')
  const history = useHistory()

  
  const handleLogout = async () => {
    // try {

    //   localStorage.clear();
    // window.location.href = '/';
    // } catch (ex) {
    // //   console.log(ex.response.status + "KKKKKKKKKKKKKKKKK");
    //   if (ex.response) {
    //     console.log(ex.response);
    //     switch (ex.response.status) {
    //       case 400:
    //         setAlertMessage(ex.response.data.message);
    //         setShow(true);
    //         break;
    //       case 401:
    //         setAlertMessage(ex.response.data.message);
    //         setShow(true);
    //         break;
    //       case 404:
    //         setAlertMessage(ex.response.data.message);
    //         setShow(true);
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    // }
    Auth.logout()
    console.log("LLLLLLLLLL")
    //history.push("/login")
    return
  };
    handleLogout()
    return <Redirect to={'/login'} />
}
