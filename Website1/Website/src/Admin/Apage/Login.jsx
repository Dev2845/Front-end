import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from "mdb-react-ui-kit";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Aid")) {
      redirect("/dash");
    }
  }, [redirect]);

  // Login form
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  // Signup modal
  const [signupModal, setSignupModal] = useState(false);

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Input change
  const getchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Signup input change
  const signupChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  // Login submit
  const getsubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      toast.error("Fill Email and Password first");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:3000/admin?email=${email}`
      );

      if (res.data.length === 0) {
        toast.error("Email does not match");
        return;
      }

      const admin = res.data[0];

      if (admin.password !== password) {
        toast.error("Password does not match");
        return;
      }

      localStorage.setItem("Aid", admin.id);
      localStorage.setItem("Aname", admin.name);

      toast.success("Login Successful");
      redirect("/dash");

    } catch (error) {
      toast.error("API Data Not Found");
      console.log(error);
    }
  };

  // Signup submit
  const signupSubmit = async () => {
    const { name, email, password } = signup;

    if (!name || !email || !password) {
      toast.error("Fill all fields");
      return;
    }

    try {
      const checkUser = await axios.get(
        `http://localhost:3000/admin?email=${email}`
      );

      if (checkUser.data.length > 0) {
        toast.error("User already exists");
        return;
      }

      await axios.post("http://localhost:3000/admin", signup);

      toast.success("Signup Successful");
      setSignupModal(false);

      setSignup({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      toast.error("Signup Failed");
      console.log(error);
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="login"
          />
        </MDBCol>

        <MDBCol md="6">
          <h2 className="mb-4 text-center">Admin Login</h2>

          <form onSubmit={getsubmit}>
            <MDBInput
              value={form.email}
              name="email"
              onChange={getchange}
              wrapperClass="mb-4"
              label="Email address"
              type="email"
              size="lg"
            />

            <MDBInput
              value={form.password}
              name="password"
              onChange={getchange}
              wrapperClass="mb-4"
              label="Password"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox label="Remember me" />
              <a href="#!">Forgot password?</a>
            </div>

            <MDBBtn className="mb-3 w-100" size="lg" type="submit">
              Sign in
            </MDBBtn>

            <MDBBtn
              color="success"
              className="w-100"
              size="lg"
              type="button"
              onClick={() => setSignupModal(true)}
            >
              Create New Account
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>

      {/* Signup Modal */}
      <MDBModal open={signupModal} setOpen={setSignupModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Sign Up</MDBModalTitle>
            </MDBModalHeader>

            <MDBModalBody>
              <MDBInput
                label="Name"
                name="name"
                value={signup.name}
                onChange={signupChange}
                className="mb-3"
              />

              <MDBInput
                label="Email"
                name="email"
                type="email"
                value={signup.email}
                onChange={signupChange}
                className="mb-3"
              />

              <MDBInput
                label="Password"
                name="password"
                type="password"
                value={signup.password}
                onChange={signupChange}
              />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => setSignupModal(false)}>
                Close
              </MDBBtn>

              <MDBBtn onClick={signupSubmit}>
                Register
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}

export default Login;