import React, { useState } from "react";
import Axios from "axios";
import swal from "sweetalert2";

function AddService() {
  const [imageFile, setImageFile] = useState("");

  const postData = (e) => {
    e.preventDefault();
    const name = document.getElementById("serviceName").value;
    const description = document.getElementById("serviceDesc").value;
    const city = document.getElementById("serviceCity").value;
    const price = document.getElementById("servicePrice").value;
    let formData = new FormData();

    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("city", city);
    formData.append("price", price);
    Axios.post("http://localhost:1221/api/addservice", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
      
      .then(() => {
        swal.fire({
          title: "Success!",
          text: "Service added successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location = "/services";
        });
      })
      .catch((error) => {
        swal.fire({
          title: "Error!",
          text: error.response?.data?.message || "Failed to add service",
          icon: "error",
          confirmButtonText: "OK"
        }).then(() => {
          window.location = "/services";
        });
        console.error(error);
      });
  };

  return (
    <div className="page-bg">
      <div className="glass-card card shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <img src="/assets/images/addservice.svg" alt="addservice" style={{width: 100, marginBottom: 16,display: "block", margin: "0 auto"}} />

        <h3 className="text-center mb-3 display-6 fw-bold text-primary">Add Service</h3>
        <p className="text-center text-muted mb-4 lead">Fill in the details to add a new service</p>
        <form onSubmit={postData}>
          <div className="form-group mb-3">
            <input type="text" id="serviceName" placeholder="Service Name*" className="form-control" required />
          </div>
          <div className="form-group mb-3">
            <input type="text" id="serviceDesc" placeholder="Description*" className="form-control" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" id="serviceCity" placeholder="City*" className="form-control" required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="number" id="servicePrice" placeholder="Price*" className="form-control" required />
            </div>
          </div>
          <div className="form-group mb-4">
            <input type="file" className="form-control" onChange={(e) => setImageFile(e.target.files[0])} required />
          </div>
          <button className="btn btn-success btn-lg rounded-pill w-100" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddService;
