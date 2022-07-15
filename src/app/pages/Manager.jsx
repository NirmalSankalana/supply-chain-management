import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddManager from '../components/AddManager'
import AllManagers from '../components/AllManagers'

function Manager() {
  return (

              
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Managers</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/manager/add-manager">
                                    Add Manager
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/manager/all-managers">
                                    All Managers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/manager/all-managers" component={AllManagers} />
                <Route exact path="/manager/add-manager" component={AddManager} />
                <Route exact path="/manager" component={AllManagers} />
            </div>
        </div>
  )
}

export default Manager