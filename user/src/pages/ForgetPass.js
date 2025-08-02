import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

function ForgetPass() {
  const sendpass = (event) => {
    event.preventDefault();
    var email = document.getElementById("email").value;
    axios
      .post("http://localhost:1221/api/forgotpass", {
        email: email,
      })
      // .then((Response) => {
      //   if (Response.data.message) {
      //     alert(Response.data.message);
      //     window.location = "/ForgetPass";
      //   } else {
      //     alert("Success!");
      //     window.location = "/login";
      //   }
      // });
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Sent an E-mail..!!!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location = "/register";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "OK"
        }).then(() => {
          window.location = "/login";
        });
        console.error(error);
      });
  };

  return (
    <div className="page-bg">
      <div className="glass-card card shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <img src="/assets/images/forgotpass-illustration.svg" alt="forgotpass" style={{width: 100, marginBottom: 16,display: "block", margin: "0 auto"}} />

        <h3 className="text-center mb-4 display-6 fw-bold text-primary">Forgot Password</h3>
        <form className="signin-form" onSubmit={sendpass}>
          <div className="mb-4">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg rounded-pill w-100 mb-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass;
