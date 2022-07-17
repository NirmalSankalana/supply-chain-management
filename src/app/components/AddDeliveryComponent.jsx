import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import { useHistory, Redirect } from "react-router-dom";
import { api } from "../../config.js";
import http from "../../services/httpService";
import Auth from "../../services/user/authService";
import { Alert } from "reactstrap";


function AddDeliveryComponent() {

  let orders = [{ 'id': 1, 'name': 'order1' }, { 'id': 2, 'name': 'order2' }, { 'id': 3, 'name': 'order3' }, { 'id': 4, 'name': 'order4' }, { 'id': 5, 'name': 'order5' }, { 'id': 6, 'name': 'order6' }];
  let trucks = ['truck1', 'trick2', 'truck3'];
  let drivers = [{ 'id': 1, 'name': 'driver1' }, { 'id': 2, 'name': 'driver2' }, { 'id': 3, 'name': 'driver3' }];
  let assistants = [{ 'id': 1, 'name': 'assistant1' }, { 'id': 2, 'name': 'assistant2' }, { 'id': 3, 'name': 'assistant3' }];
  let routes = [{ 'id': 1, 'name': 'route1' }, { 'id': 2, 'name': 'route2' }, { 'id': 3, 'name': 'route3' }];

  const [truck, setTruck] = useState('');
  const [driver, setDriver] = useState('');
  const [assistant, setAssistant] = useState('');
  const [route, setRoute] = useState('');
  const [order, setOrder] = useState();

  const order_data = []




  useEffect(() => {
    console.log(truck, driver, assistant, route, order);
  }, [truck, driver, assistant, route, order]);

  useEffect(() => {
    console.log(order_data)
  }, order_data);



  return (
    <div className="col-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Create Delivery</h4>
          {/* <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
        </Alert> */}
          <form className="" >
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Truck</label>
                  <div className="col-sm-9">
                    <select className="form-control form-control-lg "
                      onChange={(e) => setTruck(e.target.value)}>
                      {trucks.map((truck, index) => (
                        <option key={truck} value={truck}>
                          {truck}
                        </option>
                      ))}
                    </select>
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Driver</label>
                  <div className="col-sm-9">
                    <select className="form-control form-control-lg "
                      onChange={(e) => setDriver(e.target.value)}>
                      {drivers.map((driver, index) => (
                        <option key={driver.id} value={driver.name}>
                          {driver.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Assistant</label>
                  <div className="col-sm-9">
                    <select className="form-control form-control-lg "
                      onChange={(e) => setAssistant(e.target.value)}>
                      {assistants.map((assistant, index) => (
                        <option key={assistant.id} value={assistant.name}>
                          {assistant.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Route</label>
                  <div className="col-sm-9">
                    <select className="form-control form-control-lg"
                      onChange={(e) => setRoute(e.target.value)}>
                      {routes.map((route, index) => (
                        <option key={route.id} value={route.name}>
                          {route.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Group className="row">
                  <label className="col-sm-2 col-form-label">Order</label>
                  <div className="col-sm-10">
                    {/* <select className="form-control form-control-lg " 
                    onChange={(e) => setOrder(e.target.value)}
                    >
                      {orders.map((order, index) => (
                        <option key={order.id} value={order.name}>
                          {order.name}
                        </option>
                      ))}
                    </select> */}
                    <Multiselect
                    className=""
                      options={orders} // Options to display in the dropdown
                      // selectedValues={} // Preselected value to persist in dropdown
                      onSelect={(e) => {order_data.push(e)}} // Function will trigger on select event
                      onRemove={(e) => {order_data.pop(e)}}
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </Form.Group>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Add Delivery
            </button>
            {/* <button className="btn btn-light">Cancel</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddDeliveryComponent;