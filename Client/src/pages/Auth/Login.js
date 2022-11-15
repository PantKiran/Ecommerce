import React from "react";
import SubmitButton from "../../components/Button";
import Form from "react-bootstrap/Form";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from 'react-router';

const Login = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const logIn= async()=>{
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password
      }),
    };
    await fetch("http://localhost:3001/login/", requestOptions);
    navigate('/')

  }
  return (
    <>
      <NavBar />

      <div
        className="conatianer mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
            <div className="col-5">
              <Form>
                <h4>Welcome to Ecommerce! Please login.</h4>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control onKeyUp={(e)=>setphoneNumber(e.target.value)}
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                  />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onKeyUp={(e)=>setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  
                </Form.Group>
                <p>
                  New Member? <Link to="/register">Register</Link> here.
                </p>
              </Form>

              <SubmitButton
              name={"Login"}
              onClick={() =>logIn()}
            />
            </div>
      </div>
    </>
  );
};

export default Login;
