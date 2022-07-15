import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import AddStoreKeeper from '../components/AddStoreKeeper'
import AllStoreKeepers from '../components/AllStoreKeepers'

function StoreKeeper() {
  return (   
    <div className="row">
            <div className="col-12">
                <div className="page-header">
                    <h4 className="page-title">Store Keeper</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                        <ul className="quick-links ml-auto">
                            <li>
                                <NavLink className="nav-link" to="/store-keeper/add-store-keeper">
                                    Add Store Keeper
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link " to="/store-keeper/all-store-keepers">
                                    All Store Keepers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/store-keeper/all-store-keepers" component={AllStoreKeepers} />
                <Route exact path="/store-keeper/add-store-keeper" component={AddStoreKeeper} />
                <Route exact path="/store-keeper" component={AllStoreKeepers} />
            </div>
        </div>
  )
}

export default StoreKeeper