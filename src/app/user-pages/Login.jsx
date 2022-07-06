import React, { useEffect, useState, useLocation } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert, Card,  CardBody } from "reactstrap";
// import "../styles/login.css";
import Auth from '../../services/user/authService';
import UserService from '../../services/user/userService';

export default function Login1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const initialValues = { username: "", password: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setformErrors] = useState({});
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')

  // const auth = useAuth();
  // const navigate = useNavigate();
  const history = useHistory()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
    setUsername(formValues.username);
    setPassword(formValues.password);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleLogin();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleLogin = async () => {
    // auth
    //   .login({ user, password })
    //   .then((email) => {
    //     navigate("/main");
    //   })
    //   .catch((err) => {
    //     switch (err.request.status) {
    //       case 400:
    //          setAlertMessage(err.response.data.message);
    //         setShow(true);
    //         break;
    //       case 401:
    //         setAlertMessage(err.response.data.message);
    //         setShow(true);
    //         break;
    //       case 500:
    //         setAlertMessage("Server Error!");
    //         setShow(true);
    //         break;
    //       case 501:
    //         setAlertMessage("Server Error!");
    //         setShow(true);
    //         break;
    //       case 502:
    //         setAlertMessage("Server Error!");
    //         setShow(true);
    //         break;
    //       default:
    //         break;
    //     }
    //
    //   });

    try {
      const response = await Auth.login(username, password)

      if (response.status == 200 || response.status == 201) {
        console.log("success");
        console.log(response.data.token);
        Auth.loginWithJwt(response.data.token);
        history.push("/dashboard")
    }

    } catch (ex) {
      console.log(ex.response.status + "KKKKKKKKKKKKKKKKK");
      if (ex.response) {
        console.log(ex.response);
        switch (ex.response.status) {
          case 400:
            setAlertMessage(ex.response.data.message);
            setShow(true);
            break;
          case 401:
            setAlertMessage(ex.response.data.message);
            setShow(true);
            break;
          case 404:
            setAlertMessage(ex.response.data.message);
            setShow(true);
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <div className="login">
      <div className="">
        <div className="">
          <div className="position-absolute top-50 start-50 translate-middle">
            <Card
              className="shadow"
              style={{
                margin: "5rem",
                border: "0px",
                borderRadius: '10px',
                color: "rgb(38, 59, 70)",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <CardBody>
                <h1 className="">Supplier Management System</h1>
                <br></br>
                <Alert isOpen={show} color='danger'>
                  <p>{alertMessage}</p>
                </Alert>
                <div className="row">
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label htmlFor="username" size="lg">
                        Username
                      </Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                      />
                      <p
                        class="fst-italic fw-bolder"
                        style={{ color: "#f93154" }}
                      >
                        {formErrors.username}
                      </p>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password" size="lg">
                        Password
                      </Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                      />
                      <p
                        class="fst-italic fw-bolder"
                        style={{ color: "#f93154" }}
                      >
                        {formErrors.password}
                      </p>
                    </FormGroup>

                    <br></br>
                    <div className="d-grid gap-2">
                      <Button
                        size="lg"
                        type="submit"
                        value="submit"
                        color="primary"
                        className="shadow-sm"
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}