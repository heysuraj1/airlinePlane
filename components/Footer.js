import { useQuery } from "@apollo/client";
import { FOOTER_DATA } from "../gqloperations/queries";
import { BACKEND_URL } from "../helper/baseUrl";

const Footer = () => {
  const { data, loading, error } = useQuery(FOOTER_DATA);

  if (data) console.log(data);
  if (error) console.log(error);

  return (
    <>
    {
      data ?
   
    
      data.footers.data.map((hit)=>{
        return <footer className="page-footer font-small unique-color-dark" key={hit.id}>
        <div></div>
        {/* Footer Links */}
        <div className="container text-center text-md-left mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">b2btravelpatnar.in</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                We book your flight through this website. Which is available to
                you at a lower price than all other websites.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Site Map</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <a >HOME</a>
              </p>
              <p>
                <a >FLIGHTS</a>
              </p>
              <p>
                <a >BOOK TICKETS</a>
              </p>
              <p>
                <a >CONTACT US</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">BE INSIDER</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <a >LOGIN</a>
              </p>
              <p>
                <a >SIGNUP</a>
              </p>
              
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> {hit.attributes.Address}
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> {hit.attributes.Email}
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> {hit.attributes.Number}
              </p>
              
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">
           <a> {hit.attributes.Credit}</a>
        </div>
        {/* Copyright */}
      </footer>
      })
      :
      ""
    
    
     
    }
    </>
  );
};

export default Footer;
