import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../gqloperations/mutations";
import { useRouter } from "next/router";

const Login = () => {
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
  }, []);

  const router = useRouter();

  const [formData, setFormData] = useState({});

  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);

  if (loading) return <h3>Jumping Into Your Account, Please Wait...</h3>;
  if (data) {
    console.log(data);

    let showList = {
      jwt:data.login.jwt,
      userid:data.login.user.id,
      username:data.login.user.email
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
    loginUser({
      variables: {
        input: formData,
      },
    });
  };

  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <h2 className="text-dark text-center">LOGIN HERE</h2>
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
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                name="identifier"
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
            <div className="container">
              <button type="submit" className="btn btn-primary tm-btn-primary">
                Login Now
              </button>
              <h6 className="mt-5 text-center">
                {"Don't"} Have An Account ?{" "}
                <Link href="/Signup">
                  <a> Create One Now</a>
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
