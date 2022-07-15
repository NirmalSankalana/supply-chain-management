import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AllAssistants from '../components/AllAssistants'
import AddAssistant from '../components/AddAssistant'

function Assistant() {
  return (
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Assistants</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/assistant/all-assistants">
                                    All Assistants
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/assistant/add-assistants">
                                    Add Assistants
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/assistant/all-assistants" component={AllAssistants} />
                <Route exact path="/assistant/add-assistants" component={AddAssistant} />
                <Route exact path="/assistant" component={AllAssistants} />
            </div>
        </div>
  )
}

export default Assistant