import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory, Redirect } from "react-router-dom";
import { api } from "../../config.js";
import http from "../../services/httpService";
import Auth from "../../services/user/authService";
import { Alert } from "reactstrap";


function AddStoreKeeper() {
    const apiEndpoint = api.apiUrl + "/admin/register";
    const history = useHistory()
    const initialValues = { username: "", password: "", fName: "", lName: "", managerRole: "" };

    const [formValues, setformValues] = useState(initialValues);
    const [show, setShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    };

    const submitHandler = async (e) => {

        e.preventDefault();
        console.log(formValues);

        console.log(apiEndpoint)
        try {
            const response = await http.post(apiEndpoint, formValues);
            console.log(response);
        } catch (ex) {
            if (ex.response) {
                console.log(ex.response);
                switch (ex.response.status) {
                    case 400:
                        setShow(true)
                        setAlertMessage(ex.response.data.message);
                        break;
                    case 401:
                        setShow(true)
                        setAlertMessage(ex.response.data.message);
                        history.push({
                            pathname: "/logout"
                        })

                        break;
                    case 404:
                        setShow(true)
                        setAlertMessage(ex.response.data.message);
                        break;
                    default:
                        break;
                }
            }
        }

    };

    const user = Auth.getCurrentUser()

    if (user == null) {
        return <Redirect to={'/login'} />
    }

    if (user.role !== 'ADMIN') {
        return <Redirect to={'/logout'} />
    }

    // if (user){
    //   return <Redirect to="/dashboard" />
    // }
    return (
        <div className="col-12 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Add New Train</h4>
                    <Alert isOpen={show} color='danger'>
                        <p>{alertMessage}</p>
                    </Alert>
                    <form className="" onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Start City</label>
                                    <div className="col-sm-9">
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            value={formValues.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">End City</label>
                                    <div className="col-sm-9">
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            value={formValues.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Capacity</label>
                                    <div className="col-sm-9">
                                        <Form.Control
                                            type="text"
                                            name="fName"
                                            value={formValues.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary mr-2">
                            Submit
                        </button>
                        {/* <button className="btn btn-light">Cancel</button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddStoreKeeper;