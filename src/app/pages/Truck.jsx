import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddTruck from '../components/AddTruck';
import AllTrucks from '../components/AllTrucks';

function Trucks() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Trucks</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/truck/all-trucks">
                                    All Trucks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/truck/add-truck">
                                    Add Trucks
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/truck/all-trucks" component={AllTrucks} />
                <Route exact path="/truck/add-truck" component={AddTruck} />
                <Route exact path="/truck" component={AllTrucks} />
            </div>
        </div>
    )
}

export default Trucks