import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Toast } from 'react-bootstrap';
import Joi from 'joi';
import Auth from '../../services/user/authService';
import UserService from '../../services/user/userService';


export class Login extends Component {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
    forceChange: false,
  };

  schema = Joi.object({
    username: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().required(),
  });

  doSubmit = async () => {
    const { username, password } = this.state.data;
    try {
      const resposne = await Auth.login(username, password);
      Auth.loginWithJwt(
        resposne.data.access_token,
        resposne.data.refresh_token
      );
      // const response_data = await UserService.checkForcePassword();
      // if (response_data.status === 200) {
      //   if (response_data.data.code === 200) {
      //     Auth.setForcePassword(response_data.data.status);

      //     if (response_data.data.status === "FORCE_PASSWORD_CHANGE_PENDING") {
      //       this.setState({ forceChange: true });
      //       window.location = "/dashboard";
      //     } else {
      //       window.location = "/dashboard";
      //     }
      //   }
      // }
      // Toast.error("OOPS ! Something went wrong !");
    } catch (ex) {
      if (ex.response) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.error_description;
        this.setState({
          data: { username: "", password: "" },
          errors,
        });
      }
    }
  };
  render() {
    if (Auth.getCurrentUser())
      return <Redirect to="/dasboard" />;
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</Link>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    {/* <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div> */}
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Login
