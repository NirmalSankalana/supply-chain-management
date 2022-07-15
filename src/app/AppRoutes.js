import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
// import UpdateRoute from "./components/UpdateRoute";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Logout = lazy(() => import("./user-pages/Logout"));

const Register1 = lazy(() => import("./user-pages/Register"));

const DeliveryRoutes = lazy(() => import("./pages/DeliveryRoutes"));

const Trucks = lazy(() => import("./pages/Truck"));
const Driver = lazy(() => import("./pages/Driver"));
const Delivery = lazy(() => import("./pages/Delivery"));
const Assistant = lazy(() => import("./pages/Assistant"));

// admin route
const Manager = lazy(() => import("./pages/Manager"));
const UpdateManager = lazy(() => import("../app/components/UpdateManager"));
const AddManager = lazy(() => import("../app/components/AddManager"));
const AllManagers = lazy(() => import("../app/components/AllManagers"));

const UpdateRoute = lazy(() => import("./components/UpdateRoute"));
const AddRoute = lazy(() => import("../app/components/AddRoute"));
const AllRoutes = lazy(() => import("../app/components/AllRoutes"));

// const StoreKeeper = lazy(() => import("./pages/StoreKeeper"));
const Train = lazy(() => import("./pages/Train"));

// manager routes
const UpdateStorekeeper = lazy(() => import("./components/UpdateStorekeeper"));
const AddStorekeeper = lazy(() => import("../app/components/AddStorekeeper"));
const AllStorekeepers = lazy(() => import("../app/components/AllStorekeepers"));

const UpdateTrain = lazy(() => import("../app/components/UpdateTrain"));
const AddTrain = lazy(() => import("../app/components/AddTrain"));
const AllTrains = lazy(() => import("../app/components/AllTrains"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
         
          <Route path="/admin/register" component={AddManager} />
          <Route path="/admin/update" component={UpdateManager} />
          <Route path="/admin/getManagers" component={AllManagers} />

          <Route path="/storekeeper/update-route" component={UpdateRoute} />
          <Route path="/storekeeper/routes" component={AllRoutes} />
          <Route path="/storekeeper/registerRoute" component={AddRoute} />

          <Route path="/manager/register" component={AddStorekeeper} />
          <Route path="/manager/update" component={UpdateStorekeeper} />
          <Route path="/manager/getStorekeepers" component={AllStorekeepers} />

          <Route path="/manager/registerTrain" component={AddTrain} />
          <Route path="/manager/updateTrain" component={UpdateTrain} />
          <Route path="/manager/getTrains" component={AllTrains} />
          {/* <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} /> */}

          {/* <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          /> */}

          {/* <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} /> */}

          {/* <Route path="/user-pages/register-1" component={Register1} /> */}

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
          <Route path="/delivery-routes" component={DeliveryRoutes} />
          <Route path="/truck" component={Trucks} />
          <Route path="/driver" component={Driver} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/assistant" component={Assistant} />

          <Route path="/manager" component={Manager} />
          {/* <Route path="/store-keeper" component={StoreKeeper} /> */}
          <Route path="/train" component={Train} />

          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
