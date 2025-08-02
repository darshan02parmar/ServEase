import { useState } from "react";
import React from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Login() {
  function postdata(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    Axios.post("http://localhost:1221/api/verify", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        Swal.fire({
          title: "Error!",
          text: response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        const user = {
          sname: response.data[0].name,
          email: email,
        };
        localStorage.setItem("mydata", JSON.stringify(user));
        Swal.fire({
          title: "Success!",
          text: `Welcome ${response.data[0].name}`,
          icon: "success",
          confirmButtonText: "Continue",
        }).then(() => {
          window.location = "/";
        });
      }
    });
  }

  return (
    <div className="page-bg">
      <div className="glass-card text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <img src="/assets/images/login-illustration.svg" alt="Login" style={{width: 64, marginBottom: 16}} />
        <h3 className="mb-3 fw-bold text-primary">Welcome Back!</h3>
        <p className="text-muted mb-4">Login to your account to continue.</p>
        <form className="signin-form" onSubmit={postdata}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg rounded-pill w-100 mb-3">
            <i className="fa fa-sign-in-alt me-2"></i> Login
          </button>
          <div className="text-center">
            <small>Don't have an account?</small>
            <br />
            <Link to="/register" className="text-decoration-none text-primary">
              Click here to Register
            </Link>
            <br />
            <Link to="/ForgetPass" className="text-decoration-none text-primary">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
