import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Alert, Card, CardBody } from "reactstrap";
// import "../styles/login.css";
import Auth from '../../services/user/authService';


export default function DashboardAssistant() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">

                <h6 className="font-weight-light">Order Confirmation</h6>
                <br></br>

                <Form>
                  <FormGroup>
                    <Label htmlFor="order" size="lg">
                      Order
                    </Label>
                    <Input
                      type="text"
                      id="order"
                      name="order"
                    />
                  </FormGroup>
                  <div className="d-grid gap-2">
                    <Button                 
                      type="submit"
                      value="submit"
                      color="primary"
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    >
                      Confirm
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
