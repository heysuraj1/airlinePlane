import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_ALL_FLIGHTS } from "../gqloperations/queries";
import { CartProvider, useCart } from "react-use-cart";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Flight = () => {
  const router = useRouter();
  const { addItem } = useCart();
  const { loading, data, error } = useQuery(GET_ALL_FLIGHTS);
  const [showinfor, setShowInfor] = useState();
  useEffect(() => {
    setShowInfor(false);
  }, []);

  if (data) console.log(data);

  if (loading)
    return (
      <h3 className="text-center" style={{ marginTop: "100px" }}>
        Loading Please Wait...
      </h3>
    );

  const addToCart = (ed, prico, depart, arrival, departPlace, arrivalPlace) => {
    addItem({
      id: ed,
      price: prico,
      dep: depart,
      arriv: arrival,
      departPlace,
      arrivalPlace,
    });
    router.push("/BookTickets");
  };

  const showInfo = () => {
    setShowInfor(true);
  };

  return (
    <div >
      <div className="container-fluid mt-5" >
        <div className="container-fluid">
          {
            data ?
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
                      <div className="col mt-3">
                        <b>Flight</b> <br />
                        123456
                      </div>
                      <div className="col mt-3">
                        <b>{hit.attributes.Depart_place}</b> <br />
                        {hit.attributes.Depart.slice(0, 5)}
                      </div>
                      <div className="col mt-3">
                        <b> {hit.attributes.Arrival_place} </b> <br />
                        {hit.attributes.Arrival.slice(0, 5)}
                      </div>

                      {/* <div className="col mt-3">₹{hit.attributes.Price}</div> */}
                      <div className="col mt-3">
                        <div className="text-center">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              style={{ width: "100%", cursor: "pointer" }}
                              className="btn btn-info"
                              onClick={() =>
                                addToCart(
                                  hit.id,
                                  hit.attributes.Price,
                                  hit.attributes.Depart.slice(0, 5),
                                  hit.attributes.Arrival.slice(0, 5),
                                  hit.attributes.Depart_place,
                                  hit.attributes.Arrival_place
                                )
                              }
                            >
                              <b>₹{hit.attributes.Price}</b> BOOK
                            </button>
                            <button
                              style={{ width: "80px", cursor: "pointer" }}
                              className="btn btn-warning"
                              onClick={() => showInfo()}
                            >
                              More &#8659;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showinfor ? (
                      <div className="container bg-warning">
                        <h6 className="p-3">{hit.attributes.Extra_info}</h6>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>


            :

            ""
          }
        </div>
      </div>

      {/* other fields  here   */}

      {/* here is tickets  */}
    </div>
  );
};

export default Flight;
