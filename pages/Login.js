import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <h2 className="text-dark text-center">LOGIN HERE</h2>
      </div>
      <div className="container">
        <div className="tm-bg-white tm-p-4">
          <form action="index.html" method="post" className="contact-form">
            <div className="form-group">
              <input
                type="email"
                name="contact_email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="contact_subject"
                className="form-control"
                placeholder="Password"
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
