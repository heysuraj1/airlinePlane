import { useQuery } from "@apollo/client";
import { FOOTER_DATA } from "../gqloperations/queries";
import { BACKEND_URL } from "../helper/baseUrl";

const Footer = () => {
  const { data, loading, error } = useQuery(FOOTER_DATA);

  if (data) console.log(data);
  if (error) console.log(error);

  return (
    <>
      <footer className="tm-bg-dark-blue ">
        <div className="container">
          <div className="row">
            <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
              © Air Service 2021 - 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
