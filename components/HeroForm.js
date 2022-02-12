import Link from "next/link";
import { useState } from "react";
import { FILTER_TICKETS } from "../gqloperations/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import Head from "next/head";
import { BACKEND_URL } from "../helper/baseUrl";
import Motive from "../components/Motive";
import { useCart } from "react-use-cart";
import { CartProvider } from "react-use-cart";
import { useRouter } from 'next/router'




const HeroForm = () => {
  const { addItem } = useCart();
  const router = useRouter()
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [adult, setAdult] = useState("");
  const [kids, setKids] = useState("");
  const [type, setType] = useState("");
  const [show, setShow] = useState("");

  const [getTicket, { data, loading, error }] = useLazyQuery(FILTER_TICKETS, {
    variables: {
      filters: {
        Depart_place: {
          startsWith: depart,
        },
        Arrival_place: {
          startsWith: destination,
        },
        Date: {
          gt: date,
        },
      },
    },
  });

  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  const handleChange = (e) => {
    setAdult({ adult: e.target.value });
  };
  const handleChangeKids = (e) => {
    setKids({ kids: e.target.value });
  };
  const handleChangeClass = (e) => {
    setType({ type: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({depart, destination, date, adult, kids, type});
    getTicket();
  };



  const addToCart = (ed,prico) =>{
    addItem({
      id:ed,
      price:prico
  
    })
    router.push('/BookTickets')
  }
  
  






  return (
    <div>
      <div
        className="modal mt-5"
        id="exampleModalhere"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl"
          style={{ borderRadius: "50px", marginTop: "90px" }}
        >
          <div className="modal-content">
            {/* <h2 className="text-center mt-3">All Available Flights</h2> */}

            <div className="container mt-3">
                {
                  error ? 
                  <div className="text-center">


                  <h3 className="text-center text-info mt-4">Please Fill All The Details</h3>
                  <div className="text-center">
                    <img src="https://thumbs.dreamstime.com/b/simple-red-stop-roadsign-big-hand-symbol-icon-vector-illustration-no-entry-sign-isolated-white-background-183286215.jpg" className="img-fluid" alt="" />
                  </div>
                  </div>
                  

                  :

                  ""
                }
                {loading ? (
                  <h3 className="text-center mt-4">Loading Please Wait...</h3>
                ) : (
                  ""
                )}
              <div className="row">
                

                {data
                  ? 
                  
                  data.flightTickets.data.map((hit) => {
                      return (
                        <div className="col-sm-12 mb-2" key={hit.id}>
                          
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
                                07:45{" "}
                                <i className="fas fa-arrow-alt-circle-right"></i>{" "}
                                12:00
                              </div>
                              <div className="col mt-3">₹{hit.attributes.Price}</div>
                              <div className="col mt-3">
                                <div className="text-center">
                                  <button
                                    style={{ width: "100%", cursor: "pointer" }}
                                    className="btn btn-info"
                                    onClick={()=>addToCart(hit.id,hit.attributes.Price)}
                                    data-bs-dismiss="modal"
                                  >
                                    BOOK
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })

                    
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tm-section tm-bg-img" id="tm-section-1">
        <div className="tm-bg-white ie-container-width-fix-2">
          <div className="container ie-h-align-center-fix">
            <div className="row">
              <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                <form
                  onSubmit={handleSubmit}
                  className="tm-search-form tm-section-pad-2"
                >
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-map-marker fa-2x tm-form-element-icon" />
                      <input
                        name="city"
                        type="text"
                        className="form-control"
                        // here
                        value={depart}
                        onChange={(e) => setDepart(e.target.value)}
                        placeholder="Depart..."
                      />
                    </div>
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-map-marker fa-2x tm-form-element-icon" />
                      <input
                        name="city"
                        type="text"
                        className="form-control"
                        // here
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Destination..."
                      />
                    </div>

                    <div className="form-group tm-form-element tm-form-element-50">
                      <i className="fa fa-calendar fa-2x tm-form-element-icon" />
                      <input
                        name="check-in"
                        type="date"
                        className="form-control"
                        // here
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Journey Date"
                      />
                    </div>
                    {/* <div className="form-group tm-form-element tm-form-element-50">
                  <i className="fa fa-calendar fa-2x tm-form-element-icon" />
                  <input name="check-out" type="text" className="form-control" id="inputCheckOut" placeholder="Check Out" />
                </div> */}
                  </div>
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-element tm-form-element-2">
                      <select
                        name="adult"
                        className="form-control tm-select"
                        value={adult}
                        onChange={handleChange}
                      >
                        <option value>Adult</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                      <i className="fa fa-2x fa-user tm-form-element-icon" />
                    </div>
                    <div className="form-group tm-form-element tm-form-element-2">
                      <select
                        name="children"
                        className="form-control tm-select"
                        value={kids}
                        onChange={handleChangeKids}
                      >
                        <option value>Children</option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                      <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small" />
                    </div>
                    <div className="form-group tm-form-element tm-form-element-2">
                      <select
                        name="children"
                        className="form-control tm-select"
                        value={type}
                        onChange={handleChangeClass}
                      >
                        <option value>Class</option>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="Premium Economy">Premium Economy</option>
                      </select>
                      <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small" />
                    </div>

                    <div className="form-group tm-form-element tm-form-element-2">
                      <button
                        type="submit"
                        className="btn btn-primary tm-btn-search"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalhere"
                      >
                        Check Availability
                      </button>
                    </div>
                  </div>
                  <div className="form-row clearfix pl-2 pr-2 tm-fx-col-xs">
                    <p className="tm-margin-b-0">
                      Click On Need Help, If You Are Having Some Issues.
                    </p>
                    <Link href="/NeedHelp">
                      <a className="ie-10-ml-auto ml-auto mt-1 tm-font-semibold tm-color-primary">
                        Need Help?
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Motive />
    </div>
  );
};

export default HeroForm;
