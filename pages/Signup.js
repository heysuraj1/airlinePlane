import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "150px" }}>
        <h2 className="text-dark text-center">REGISTER HERE</h2>
      </div>
      <div className="container">
        <div className="tm-bg-white tm-p-4">
          <form action="index.html" method="post" className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="contact_name"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
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
                type="text"
                name="contact_subject"
                className="form-control"
                placeholder="Subject"
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
