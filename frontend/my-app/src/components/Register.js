import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputVal = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.name === "" || user.email === "" || user.password === "") {
      toast.error("Fields cannot be empty!");
    } else {
      const response = await axios.post("/api/users/register", user);
      try {
        if (response.data.success) {
          toast.success(response.data.msg);
        } else {
          toast.error(response.data.msg);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="card shadow">
          <h3 className="text-center">Registration Form</h3>
          <div className="card-body p-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={inputVal}
                  name="name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={inputVal}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={inputVal}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
