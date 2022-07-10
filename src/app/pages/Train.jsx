import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddTrain from '../components/AddTrain'
import AllTrains from '../components/AllTrains'

function Train() {
  return (   
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Train</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/train/add-train">
                                    Add Train
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/train/all-trains">
                                    All Trains
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/train/all-trains" component={AllTrains} />
                <Route exact path="/train/add-train" component={AddTrain} />
                <Route exact path="/train" component={AllTrains} />
            </div>
        </div>
  )
}

export default Train