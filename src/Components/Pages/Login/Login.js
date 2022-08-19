import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  return (
    <div className="container w-50 mx-auto mt-5">
      <div className="shadow-lg p-3">
        <h2 className="fw-bold text-center mt-2">Please Login</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button
            variant="primary w-50 d-block mx-auto mb-2 fw-bold fs-5"
            type="submit"
          >
            Login
          </Button>
        </Form>
        {errorElement}
        <p>
          New to User ?{" "}
          <span
            onClick={navigateRegister}
            className="text-primary"
            type="submit"
          >
            Please Register
          </span>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
