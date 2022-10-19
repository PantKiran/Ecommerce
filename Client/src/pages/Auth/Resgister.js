import React from "react";
import SubmitButton from "../../components/Button";
import { Form } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useState, useEffect } from 'react';
import { useRef } from "react";

const Register = () => {
  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setfullName] = useState('')

  const registerUser=async(e)=>{
  //   e.preventDefault()
  // e.target.reset()
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({phoneNumber:phoneNumber,password:password,fullName:fullName}),
    
  };
  await fetch("http://localhost:3001/register/", requestOptions);
  
}


  return (
    <div className="conatainer mt-3">
    <NavBar/>
      <h4>Create your Ecomomerce Account</h4>
      <div className="col-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number*</Form.Label>
            <Form.Control 
              type="text" onKeyUp={(e)=>setphoneNumber(e.target.value)}
              placeholder="please enter your phone number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password*</Form.Label>
            <Form.Control onKeyUp={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="minimum six character with a number and a letter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name*</Form.Label>
            <Form.Control onKeyUp={(e)=>setfullName(e.target.value)}
              type="text"
              placeholder="Enter your first and last name"
            />
          </Form.Group>
          <p>
          Already member? <Link to="/login">Login</Link> here.
          </p>
        </Form>
        <SubmitButton onClick={()=>registerUser()}name={"SIGN UP"} />

      </div>
    </div>
  );
};

export default Register;
