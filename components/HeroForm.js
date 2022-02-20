import Link from "next/link";
import { useState } from "react";
import { FILTER_TICKETS } from "../gqloperations/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import Head from "next/head";
import { BACKEND_URL } from "../helper/baseUrl";
import Motive from "../components/Motive";
import { useCart } from "react-use-cart";
import { CartProvider } from "react-use-cart";
import { useRouter } from "next/router";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";

const HeroForm = () => {
  const { addItem } = useCart();
  const router = useRouter();
  const [depart, setDepart] = useState([]);
  const [destination, setDestination] = useState([]);
  const [date, setDate] = useState("");
  const [adult, setAdult] = useState("");
  const [kids, setKids] = useState("");
  const [type, setType] = useState("");
  const [show, setShow] = useState("");

  const codes = [
    "( AGX ) Agatti Island Airport",
    "( AMD ) Ahmedabad Airport",
    "( AJL ) Aizawl Airport",
    "( AKD ) Akola Airport",
    "( IXV ) Along Airport",
    "( LKO ) Amausi Airport",
    "( LUH ) Amritsar Airport",
    "( IXB ) Bagdogra Airport",
    "( IXE ) Bajpe Airport",
    "( IXL ) Bakula Rimpoche Airport",
    "( RGH ) Balurghat Airport",
    "( IXD ) Bamrauli Airport",
    "( SHL ) Barapani Airport",
    "( BEK ) Bareli Airport",
    "( BEP ) Bellary Airport",
    "( BLR ) Bengaluru International Airport",
    "( BUP ) Bhatinda Airport",
    "( IXB ) Bagdogra Airport",
    "( BHU ) Bhavnagar Airport",
    "( BHO ) Bhopal Airport",
    "( BBI ) Bhubaneswar Airport",
    "( BKB ) Bikaner Airport",
    "( PAB ) Bilaspur Airport",
    "( IXR ) Birsa Munda International Airport",
    "( GAU ) Borjhar Airport",
    "( CBD ) Car Nicobar Airport",
    "( IXC ) Chandigarh Airport",
    "( MAA ) Chennai International Airport",
    "( BOM ) Chhatrapati Shivaji International Airport",
    "( IXU ) Chikkalthana Airport",
    "( COK ) Cochin International Airport",
    "( COH ) Cooch Behar Airport",
    "( CDP ) Cuddapah Airport",
    "( UDR ) Dabok Airport",
    "( GOI ) Dabolim Airport",
    "( NMB ) Daman Airport",
    "( DAE ) Daparizo Airport",
    "( DAI ) Darjeeling Airport",
    "( DED ) Dehra Dun Airport",
    "( DEP ) Deparizo Airport",
    "( IDR ) Devi Ahilyabai Holkar Airport",
    "( DBD ) Dhanbad Airport",
    "( DIB ) Dibrugarh Airport",
    "( DMU ) Dimapur Airport",
    "( DIU ) Diu Airport",
    "( DHM ) Gaggal Airport",
    "( ISK ) Gandhinagar Airport",
    "( GAY ) Gaya Airport",
    "( GOP ) Gorakhpur Airport",
    "( JGA ) Govardhanpur Airport",
    "( GUX ) Guna Airport",
    "( GWL ) Gwalior Airport",
    "( HSS ) Hissar Airport",
    "( HBX ) Hubli Airport",
    "( HYD ) Hyderabad International Airport",
    "( DEL ) Indira Gandhi International Airport",
    "( JLR ) Jabalpur Airport",
    "( JGB ) Jagdalpur Airport",
    "( JSA ) Jaisalmer Airport",
    "( PYB ) Jeypore Airport",
    "( JDH ) Jodhpur Airport",
    "( IXH ) Kailashahar Airport",
    "( IXQ ) Kamalpur Airport",
    "( IXY ) Kandla Airport",
    "( KNU ) Kanpur Airport",
    "( IXK ) Keshod Airport",
    "( HJR ) Khajuraho Airport",
    "( AGR ) Kheria Airport",
    "( IXN ) Khowai Airport",
    "( KLH ) Kolhapur Airport",
    "( KTU ) Kota Airport",
    "( CCJ ) Kozhikode Airport",
    "( KUU ) Kullu Manali Airport",
    "( IXS ) Kumbhirgram Airport",
    "( IXI ) Lilabari Airport",
    "( PNQ ) Lohegaon Airport",
    "( IXM ) Madurai Airport",
    "( LDA ) Malda Airport",
    "( MOH ) Mohanbari Airport",
    "( IMF ) Municipal Airport",
    "( MZA ) Muzaffarnagar Airport",
    "( MZU ) Muzaffarpur Airport",
    "( MYQ ) Mysore Airport",
    "( NDC ) Nanded Airport",
    "( CCU ) Netaji Subhash Chandra Bose International Airport",
    "( NVY ) Neyveli Airport",
    "( OMN ) Osmanabad Airport",
    "( PGH ) Pantnagar Airport",
    "( IXT ) Pasighat Airport",
    "( IXP ) Pathankot Airport",
    "( PAT ) Patna Airport",
    "( CJB ) Peelamedu Airport",
    "( PNY ) Pondicherry Airport",
    "( PBD ) Porbandar Airport",
    "( IXZ ) Port Blair Airport",
    "( PUT ) Puttaparthi Airport",
    "( RPR ) Raipur Airport",
    "( ATQ ) Raja Sansi Airport",
    "( RJA ) Rajahmundry Airport",
    "( RAJ ) Rajkot Airport",
    "( RJI ) Rajouri Airport",
    "( RMD ) Ramagundam Airport",
    "( RTC ) Ratnagiri Airport",
    "( REW ) Rewa Airport",
    "( RRK ) Rourkela Airport",
    "( JRH ) Rowriah Airport",
    "( BHJ ) Rudra Mata Airport",
    "( RUP ) Rupsi Airport",
    "( SXV ) Salem Airport",
    "( TEZ ) Salonibari Airport",
    "( IXG ) Sambre Airport",
    "( JAI ) Sanganeer Airport",
    "( TNI ) Satna Airport",
    "( IXJ ) Satwari Airport",
    "( SSE ) Sholapur Airport",
    "( SLV ) Simla Airport",
    "( IXA ) Singerbhil Airport",
    "( IXW ) Sonari Airport",
    "( NAG ) Sonegaon Airport",
    "( SXR ) Srinagar Airport",
    "( STV ) Surat Airport",
    "( TEI ) Tezu Airport",
    "( TJV ) Thanjavur Airport",
    "( TRV ) Thiruvananthapuram International Airport",
    "( TIR ) Tirupati Airport",
    "( TRZ ) Trichy Airport",
    "( TCR ) Tuticorin Airport",
    "( BDQ ) Vadodara Airport",
    "( VNS ) Varanasi Airport",
    "( VGA ) Vijayawada Airport",
    "( VTZ ) Vishakhapatnam Airport",
    "( WGC ) Warangal Airport",
    "( ZER ) Zero Airport",
    "( DXB ) DUBAI",
    "( SHJ ) sharjah",
    "( SYD ) Australia",
    "( LHR ) London",
    "( KWI ) Kuwait",
    "( MCT ) MUSCOT",
    "( DOH ) Doha",
    "( JED ) JEDDAH",
    "( AUH ) Abu Dhabi",
    "( MLE ) Maldives",
    "( YYZ ) Toronto",
  ];
  console.log(date.slice(8, 10), date.slice(5, 7), date.slice(0, 4));

  const [getTicket, { data, loading, error }] = useLazyQuery(FILTER_TICKETS, {
    variables: {
      filters: {
        Depart_place: {
          contains: depart.toString().slice(2, 5),
        },
        Arrival_place: {
          contains: destination.toString().slice(2, 5),
        },
        Flight_Day: {
          contains: `D_${date.slice(8, 10)}`,
        },
        Flight_Month: {
          contains: `M_${date.slice(5, 7)}`,
        },
        Flight_Year: {
          contains: `Y_${date.slice(0, 4)}`,
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

    console.log(
      depart.toString().slice(2, 5),
      destination.toString().slice(2, 5)
    );
  };

  const addToCart = (ed, prico) => {
    addItem({
      id: ed,
      price: prico,
    });
    router.push("/BookTickets");
  };

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
              {data ? (
                data.flightTickets.data == 0 ? (
                  <div className="text-center">
                    <h1 className="text-center text-info mt-4 text-danger">
                      <b>Oops</b>
                    </h1>
                    <p>
                      <b>No Any Flights Found On This Day</b>
                    </p>
                    <div className="text-center">
                      <img
                        src="/img/no-plane.png"
                        className="img-fluid"
                        alt=""
                        style={{ marginTop: "20px", width: "300px" }}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}

              {error ? (
                <div className="text-center">
                  <h3 className="text-center text-info mt-4">
                    Please Fill All The Details
                  </h3>
                  <div className="text-center">
                    <img
                      src="https://thumbs.dreamstime.com/b/simple-red-stop-roadsign-big-hand-symbol-icon-vector-illustration-no-entry-sign-isolated-white-background-183286215.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {loading ? (
                <h3 className="text-center mt-4">Loading Please Wait...</h3>
              ) : (
                ""
              )}
              <div className="row">
                {data
                  ? data.flightTickets.data.map((hit) => {
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
                              <div className="col mt-3">
                                {hit.attributes.Depart_place} <br />
                                <i className="fas fa-arrow-alt-circle-right"></i>{" "}
                                <br />
                                {hit.attributes.Arrival_place}
                              </div>
                              <div className="col mt-3">
                                {hit.attributes.Depart.slice(0, 5)}
                                <i className="fas fa-arrow-alt-circle-right"></i>{" "}
                                {hit.attributes.Arrival.slice(0, 5)}
                              </div>
                              <div className="col mt-3">
                                ₹{hit.attributes.Price}
                              </div>
                              <div className="col mt-3">
                                <div className="text-center">
                                  <button
                                    style={{ width: "100%", cursor: "pointer" }}
                                    className="btn btn-info"
                                    onClick={() =>
                                      addToCart(hit.id, hit.attributes.Price)
                                    }
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
                  autoComplete="on"
                >
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-map-marker fa-2x tm-form-element-icon" />
                      <Typeahead
                        name="city"
                        type="text"
                        onChange={setDepart}
                        selected={depart}
                        placeholder="Depart..."
                        autoComplete="name"
                        options={codes}
                        id="basic-typeahead-single"
                      />
                    </div>
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-map-marker fa-2x tm-form-element-icon" />
                      <Typeahead
                        name="city"
                        type="text"
                        onChange={setDestination}
                        placeholder="Destination..."
                        options={codes}
                        selected={destination}
                        id="basic-typeahead-multiple"
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
                  </div>
                  <div className="form-row tm-search-form-row">
                    {/* <div className="form-group tm-form-element tm-form-element-2">
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
                    </div> */}

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
