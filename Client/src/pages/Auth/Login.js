import React from "react";
import SubmitButton from "../../components/Button";
import Form from "react-bootstrap/Form";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import { Formik, Field } from "formik";
import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//   .required('No password provided.') 
//   .min(8, 'Password is too short - should be 8 chars minimum.')
//   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
// });

const Login = () => {
  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("Required"),
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
  });
  const signUp=()=>{
   
  }
  return (
    <>
    <NavBar />

    <div className="conatianer mt-3" style={{display: 'flex', justifyContent: 'center'}}>
      
      <Formik
        initialValues={{
          phoneNumber: "",
          password:""
        }}
         validationSchema={SignupSchema}
         onSubmit={values => {
           // same shape as initial values
           console.log(values);
         }}
      >
        {({ errors, touched }) => (
          <div className="col-5">
            <Form>
                <h4>Welcome to Ecommerce! Please login.</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" name='mobile' placeholder="Enter Mobile Number" />
                {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.email}</div>
                  ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
                {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
              </Form.Group>
              <p>
                New Member? <Link to="/register">Register</Link> here.
              </p>
            </Form>

            <SubmitButton
              name={"Login"}
              onClick={() => signUp()}
            />
            
          </div>
        )}
      </Formik>
    </div>
    </>
  );
};

export default Login;
