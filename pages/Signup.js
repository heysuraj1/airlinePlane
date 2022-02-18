import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../gqloperations/mutations";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const [loginUser, { loading, error, data }] = useMutation(REGISTER_USER);

  if (loading) return <h3>Creating Your Account, Please Wait...</h3>;

  if (data) {
    console.log(data);

    let showList = {
      jwt:data.register.jwt,
      userid:data.register.user.id,
      username:data.register.user.email
    }





    localStorage.setItem("jwt", JSON.stringify(showList));
    // router.reload('/Flights')
    router.push('/')
  
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    loginUser({
      variables: {
        input: formData,
      },
    });
    console.log(data);
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <h2 className="text-dark text-center">REGISTER HERE</h2>
      </div>
      {error && (
                <div className="mt-5">
                  <h1 className="text-center mt-5 text-danger">
                    {error.message}
                  </h1>
                </div>
              )}
      <div className="container">
        <div className="tm-bg-white tm-p-4">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary tm-btn-primary">
              SignUp Now
            </button>
          </form>
          <h6 className="mt-5 text-center">
            Already Have An Account ?{" "}
            <Link href="/Login">
              <a> Login Now</a>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Signup;
