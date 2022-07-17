import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddDriver from '../components/AddDriver'
import AllDrivers from '../components/AllDrivers'

function Driver() {
  return (
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Driver</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/driver/all-drivers">
                                    All Driver
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/driver/add-driver">
                                    Add Driver
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/driver/all-drivers" component={AllDrivers} />
                <Route exact path="/driver/add-driver" component={AddDriver} />
                <Route exact path="/driver" component={AllDrivers} />
            </div>
        </div>
  )
}

export default Driver