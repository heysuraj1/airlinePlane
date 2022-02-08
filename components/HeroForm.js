import Link from 'next/link'
import { useState } from "react";

const HeroForm = () => {
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [adult, setAdult] = useState("");
  const [kids, setKids] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(depart, destination, date, adult, kids, type);
  };

  return (
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
                      onChange={(e)=>  setDepart (e.target.value)}
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
                      onChange={(e)=> setDestination  (e.target.value)}
                      placeholder="Destination..."
                    />
                  </div>

                  <div className="form-group tm-form-element tm-form-element-50">
                    <i className="fa fa-calendar fa-2x tm-form-element-icon" />
                    <input
                      name="check-in"
                      type="text"
                      className="form-control"
                      // here 
                      value={date}
                      onChange={(e)=>  setDate (e.target.value)}
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
                      id="adult"
                    >
                      <option value>Adult</option>
                      <option  onChange={(e)=> setAdult(e.target.value) }  value={1}>1</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={2}>2</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={3}>3</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={4}>4</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={5}>5</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={6}>6</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={7}>7</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={8}>8</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={9}>9</option>
                      <option onChange={(e)=> setAdult(e.target.value) }  value={10}>10</option>
                    </select>
                    <i className="fa fa-2x fa-user tm-form-element-icon" />
                  </div>
                  <div className="form-group tm-form-element tm-form-element-2">
                    <select
                      name="children"
                      className="form-control tm-select"
                      id="children"
                    >
                      <option value>Children</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={0}>0</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={1}>1</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={2}>2</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={3}>3</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={4}>4</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={5}>5</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={6}>6</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={7}>7</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={8}>8</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={9}>9</option>
                      <option onChange={(e)=> setKids(e.target.value)}  value={10}>10</option>
                    </select>
                    <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small" />
                  </div>
                  <div className="form-group tm-form-element tm-form-element-2">
                    <select
                      name="children"
                      className="form-control tm-select"
                      id="children"
                    >
                      <option value>Class</option>
                      <option onChange={(e)=> setType(e.target.value) }  value="Economy">Economy</option>
                      <option onChange={(e)=> setType(e.target.value) }  value="Business">Business</option>
                      <option onChange={(e)=> setType(e.target.value) }  value="Premium Economy">Premium Economy</option>
                    </select>
                    <i className="fa fa-user tm-form-element-icon tm-form-element-icon-small" />
                  </div>
                  {/* <div className="form-group tm-form-element tm-form-element-2">
                  <select name="room" className="form-control tm-select" id="room">
                    <option value>Room</option>
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
                  <i className="fa fa-2x fa-bed tm-form-element-icon" />
                </div> */}
                  <div className="form-group tm-form-element tm-form-element-2">
                    <button
                      type="submit"
                      className="btn btn-primary tm-btn-search"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
                <div className="form-row clearfix pl-2 pr-2 tm-fx-col-xs">
                  <p className="tm-margin-b-0">
                    Click On Need Help, If You Are Having Some Issues.
                  </p>
                  <Link  href='/NeedHelp'>
                  <a
                   
                   className="ie-10-ml-auto ml-auto mt-1 tm-font-semibold tm-color-primary"
                   >
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
  );
};

export default HeroForm;
