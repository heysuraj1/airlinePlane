import { useQuery } from "@apollo/client";
import { FOOTER_DATA } from "../gqloperations/queries";

const Whatsapp = () => {
  const { data, loading, error } = useQuery(FOOTER_DATA);

  if (data) console.log(data);
  if (error) console.log(error);

  return (
    <>
      {data ? (
        <a
          href={`https://api.whatsapp.com/send?phone=${data.footers.data[0].attributes.Whatsapp_Number}&text=Hii.`}
          className="float"
        >
          <i style={{ fontSize: "40px" }} className="fab fa-whatsapp mt-2"></i>
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default Whatsapp;
