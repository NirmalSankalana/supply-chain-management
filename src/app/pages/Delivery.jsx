import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import CreateDelivery from '../components/CreateDelivery';
import AddDeliveryComponent from '../components/AddDeliveryComponent';

function Delivery() {
  return (
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Delivery</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/delivery/create-delivery">
                                    Create Delivery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/delivery/add-delivery-components">
                                    Add Delivery Components
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/delivery/create-delivery" component={CreateDelivery} />
                <Route exact path="/delivery/add-delivery-components" component={AddDeliveryComponent} />
            </div>
        </div>
  )
}

export default Delivery