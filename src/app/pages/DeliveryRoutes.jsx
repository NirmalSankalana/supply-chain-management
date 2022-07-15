import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddRoute from '../components/AddRoute';
import AllRoutes from '../components/AllRoutes';
function DeliveryRoutes() {
  return (
      <div className="row">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Delivery Routes</h4>
            <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
              <ul className="quick-links ml-auto">
                <li>
                  <NavLink className="nav-link" to="/delivery-routes/all-routes">
                  All Routes
                </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link " to="/delivery-routes/add-route">
                  Add Route
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Route exact path="/delivery-routes/all-routes" component={AllRoutes} />
          <Route exact path="/delivery-routes/add-route" component={AddRoute} />
          <Route exact path="/delivery-routes/update-route" component={AddRoute} />
          <Route exact path="/delivery-routes" component={AllRoutes} />
        </div>
      </div>


  )
}

export default DeliveryRoutes;