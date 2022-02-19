import { Parallax, Background } from "react-parallax";
import { useQuery } from '@apollo/client';
import {FLIGHT_ABOUT} from '../gqloperations/queries'
import {BACKEND_URL} from '../helper/baseUrl'
const AboutFlights = () => {

  
  const {data,loading,error} = useQuery(FLIGHT_ABOUT)

  if(data) console.log(data)
  if(error) console.log(error)




  return (
    <div>
      {
        data ?
        <>
        

        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <div className="text-center">
                <img
                  src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width={700}
                  height={500}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                {data.flightsAboutSection.data.attributes.title}
              </h1>
              <p className="lead">
                {data.flightsAboutSection.data.attributes.description}
               
              </p>
            </div>
          </div>
        </div>
  
        <div className="container col-xxl-8 px-4 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 ">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
              {data.flightsAboutSection.data.attributes.title_two}
              </h1>
              <p className="lead">
              {data.flightsAboutSection.data.attributes.desc_two}
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <div className="text-center">
                <img
                  src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width={700}
                  height={500}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        </>


        :



        ""
      }
    </div>
  );
};

export default AboutFlights;
