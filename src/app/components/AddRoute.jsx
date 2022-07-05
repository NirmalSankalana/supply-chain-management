import React from 'react'
import { Form } from 'react-bootstrap'

function AddRoute() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Default form</h4>
                    <p className="card-description"> Basic form layout </p>
                    <form className="forms-sample">
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1">Username</label>
                            <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" size="lg" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                            <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                        </Form.Group>
                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        <button className="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddRoute