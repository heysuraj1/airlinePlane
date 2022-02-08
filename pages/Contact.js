import Link from "next/link";
import { Parallax } from "react-parallax";

const Contact = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Parallax
        blur={10}
        bgImage="/img/parallax-image.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="container">
          <div
            className="row"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <div className="col-sm-5 mt-2 mb-5">
              <div className="text-center">
                <img className="img-fluid" src="/img/plane.png" alt="" />
              </div>
            </div>

            <div className="col-sm-7 mt-2 mb-3">
              <div className="container">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8">
                      <div className="tm-bg-white tm-p-4">
                        <form
                          action="index.html"
                          method="post"
                          className="contact-form"
                        >
                            <div className="form-group">
                            <input
                              type="text"
                              name="contact_subject"
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
                            <textarea
                              type="text"
                              name="contact_email"
                              className="form-control"
                              placeholder="Message"
                              required
                            />
                          </div>
                          
                          <div className="container">
                            <button
                              type="submit"
                              className="btn btn-primary tm-btn-primary"
                            >
                              SEND
                            </button>
                           
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;
