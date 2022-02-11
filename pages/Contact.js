import Link from "next/link";
import { Parallax } from "react-parallax";
import BottomFooter from "../components/BottomFooter";

const Contact = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Parallax
        blur={10}
        bgImage="/img/parallax-image.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="container ie-h-align-center-fix">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
              <div className="text-center">

              <img className="img-fluid mt-5" src="/img/plane.png" alt="" />
              </div>
            </div>
            
            <BottomFooter />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;

// <BottomFooter/>
