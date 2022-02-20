import { Parallax, Background } from "react-parallax";
import { useQuery } from "@apollo/client";
import { FLIGHT_ABOUT } from "../gqloperations/queries";
import { BACKEND_URL } from "../helper/baseUrl";
const AboutFlights = () => {
  const { data, loading, error } = useQuery(FLIGHT_ABOUT);

  if (data) console.log(data);
  if (error) console.log(error);

  return (
    <div>
      {data ? (
        <>
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <div className="text-center">
                  <img
                    src="https://us.123rf.com/450wm/yarruta/yarruta1705/yarruta170500196/78590202-happy-family-on-the-beach-people-having-fun-on-summer-vacation-father-mother-and-child-against-blue-.jpg"
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
                    src="https://media.istockphoto.com/photos/family-vacation-holiday-happy-family-running-on-the-beach-in-the-picture-id1299265795?b=1&k=20&m=1299265795&s=170667a&w=0&h=_E7ptBvGfeg9qNN_V1n_Ta0aU0WdD9mMkuXRP9MDqbM="
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
      ) : (
        ""
      )}
    </div>
  );
};

export default AboutFlights;
