import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_ALL_FLIGHTS } from "../gqloperations/queries";
import { CartProvider, useCart } from "react-use-cart";
import { useRouter } from "next/router";

const Flight = () => {
  const router = useRouter();
  const { addItem } = useCart();
  const { loading, data, error } = useQuery(GET_ALL_FLIGHTS);

  if (data) console.log(data);

  if (loading)
    return (
      <h3 className="text-center" style={{ marginTop: "100px" }}>
        Loading Please Wait...
      </h3>
    );

  const addToCart = (ed, prico) => {
    addItem({
      id: ed,
      price: prico,
    });
    router.push("/BookTickets");
  };

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="container-fluid">
          <div className="row">
            {data.flightTickets.data.map((hit) => {
              return (
                <div className="col-sm-12 mt-3" key={hit.id}>
                  <div className="container-fluid">
                    <div className="row bord">
                      <div className="col">
                        <img
                          width={50}
                          src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col mt-3">Flight Name Here</div>
                      <div className="col mt-3">
                        {hit.attributes.Depart.slice(0, 5)}&nbsp;
                        <i className="fas fa-arrow-alt-circle-right"> </i>&nbsp;
                        {hit.attributes.Arrival.slice(0, 5)}
                      </div>
                      <div className="col mt-3">₹{hit.attributes.Price}</div>
                      <div className="col mt-3">
                        <div className="text-center">
                          <button
                            style={{ width: "100%", cursor: "pointer" }}
                            className="btn btn-info"
                            onClick={() =>
                              addToCart(hit.id, hit.attributes.Price)
                            }
                          >
                            BOOK
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* other fields  here   */}

      <div className="container mt-5 mb-5">
        <h2 className="text-center text-info">
          {" "}
          <b>Fly With Us</b>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img
                width={100}
                src="https://e7.pngegg.com/pngimages/489/391/png-clipart-airline-ticket-flight-airplane-decimal-binary-fun-pro-airplane-angle-computer.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* here is tickets  */}
    </div>
  );
};

export default Flight;
