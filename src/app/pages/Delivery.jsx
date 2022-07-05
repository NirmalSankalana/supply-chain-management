import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddRoute from '../components/AddRoute'
import AllRoutes from '../components/AllRoutes'

function Delivery() {
  return (
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Trucks</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/delivery-routes/all-routes">
                                    All Trucks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/delivery-routes/add-route">
                                    Add Trucks
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/delivery-routes/all-routes" component={AllRoutes} />
                <Route exact path="/delivery-routes/add-route" component={AddRoute} />
            </div>
        </div>
  )
}

export default Delivery