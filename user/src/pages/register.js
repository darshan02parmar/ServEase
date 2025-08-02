import Axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  function postdata(event) {
    event.preventDefault();

    Axios.post("http://localhost:1221/api/insert", {
      name,
      email,
      mobile,
      password,
    })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "User Registered!!!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location = "/login";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error(error);
      });
  }

  return (
    <div className="page-bg">
      <div className="glass-card card shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 display-6 fw-bold text-primary">Register</h3>
        <form onSubmit={postdata}>
          <div className="mb-3">
            <label className="form-label" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem', color: '#333', textAlign: 'left'}}>Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem', color: '#333', textAlign: 'left'}}>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem', color: '#333', textAlign: 'left'}}>Mobile</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem', color: '#333', textAlign: 'left'}}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Choose a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success btn-lg rounded-pill w-100 mb-3">
            Register
          </button>

          <div className="text-center">
            <small>Already have an account?</small>
            <br />
            <Link to="/login" className="text-decoration-none text-primary">
              Click here to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
