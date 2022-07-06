// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { Form, Toast } from 'react-bootstrap';
// import Joi from 'joi';
// import Auth from '../../services/user/authService';
// import UserService from '../../services/user/userService';
//
//
// export class Login extends Component {
//   state = {
//     data: {
//       username: "",
//       password: "",
//     },
//     errors: {},
//     show: false,
//     alertMessage: "",
//   };
//
//   // schema = Joi.object({
//   //   username: Joi.string()
//   //     .required()
//   //     .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
//   //   password: Joi.string().required(),
//   // });
//
//   doSubmit = async () => {
//     console.log("KKKKKKKKKKKKK");
//     const { username, password } = this.state.data;
//     try {
//       const resposne = await Auth.login(username, password)
//
//       if (response.status == 200 || response.status == 201) {
//         console.log("success");
//         Auth.loginWithJwt(response.data.token);
//         // this.navigate('/dasboard/rate-of-production')
//         // return <Redirect to="/dasboard/rate-of-production" replace={true} />
//       }
//       // const response_data = await UserService.checkForcePassword();
//       // if (response_data.status === 200) {
//       //   if (response_data.data.code === 200) {
//       //     Auth.setForcePassword(response_data.data.status);
//
//       //     if (response_data.data.status === "FORCE_PASSWORD_CHANGE_PENDING") {
//       //       this.setState({ forceChange: true });
//       //       window.location = "/dashboard";
//       //     } else {
//       //       window.location = "/dashboard";
//       //     }
//       //   }
//       // }
//       // Toast.error("OOPS ! Something went wrong !");
//     } catch (ex) {
//       console.log(ex.response.status + "KKKKKKKKKKKKKKKKK");
//       if (ex.response) {
//         // const errors = {
//         //   ...this.state.errors,
//         // };
//         // errors.username = ex.response.data.error_description;
//         console.log(ex.response);
//         switch (ex.response.status) {
//           case 400:
//             this.setState({
//               alertMessage: ex.response.message,
//               show: true,
//             });
//             break;
//           case 401:
//             this.setState({
//               alertMessage: ex.response.message,
//               show: true,
//             });
//             break;
//           case 404:
//             this.setState({
//               alertMessage: ex.response.message,
//               show: true,
//             });
//             break;
//           default:
//             break;
//         }
//         this.setState({
//           data: {
//             username: "",
//             password: "",
//           },
//         });
//       }
//     }
//   };
//   render() {
//     if (Auth.getCurrentUser())
//       return <Redirect to="/dasboard" />;
//     return (
//       <div>
//         <div className="d-flex align-items-center auth px-0">
//           <div className="row w-100 mx-0">
//             <div className="col-lg-4 mx-auto">
//               <div className="auth-form-light text-left py-5 px-4 px-sm-5">
//                 <h4>Hello! let's get started</h4>
//                 <h6 className="font-weight-light">Sign in to continue.</h6>
//                 <Form className="pt-3" >
//                 <Form.Group className="d-flex search-field">
//                       // <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" onChange={(event) => { this.setState({ data.username: event.target.value }) }} />
//                     </Form.Group>
//                     <Form.Group className="d-flex search-field">
//                       <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" onChange={(event) => { this.setState({ data:{password: event.target.value }) }} />
//                     </Form.Group>
//
//                   <div className="mt-3">
//                   <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  onClick={() => { this.doSubmit() }}>SIGN IN</Link>
//                   </div>
//                   <div className="my-2 d-flex justify-content-between align-items-center">
//                     {/* <div className="form-check">
//                       <label className="form-check-label text-muted">
//                         <input type="checkbox" className="form-check-input"/>
//                         <i className="input-helper"></i>
//                         Keep me signed in
//                       </label>
//                     </div> */}
//                     <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Login
