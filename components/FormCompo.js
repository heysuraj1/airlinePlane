import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BACKEND_URL } from "../helper/baseUrl";
import { useMutation } from "@apollo/client";
import { POST_ORDER_IN_BACKEND } from "../gqloperations/mutations";

const FormCompo = () => {
  const { isEmpty, items, removeItem, cartTotal, emptyCart } = useCart();
  const [sendo, { loading, error, data }] = useMutation(POST_ORDER_IN_BACKEND);

  const [show, setShow] = useState();
  if (typeof window !== "undefined" && localStorage.getItem("jwt")) {
    const wna = localStorage.getItem("jwt");
    const fine = JSON.parse(wna);

    let end = fine.jwt;
    console.log(end);
  }

  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [ZIP, setZIP] = useState("");
  const [Ticket_Purchased, setTicket_Purchased] = useState("");

  const router = useRouter();

  useEffect(() => {
    setShow(false);
  }, []);

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartTotal,
      }),
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: "rzp_test_QfgIga7Egc2twS", // Enter the Key ID generated from the Dashboard
      name: "DigitalPrenure.in",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      image:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-05/22/full/1590090536-9584.jpg",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        handleSubmit();
        emptyCart();
        router.push("/");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleNext = (e) => {
    e.preventDefault();
    setTicket_Purchased(items);
    setShow(true);
  };
  const handleSubmit = async () => {
    //     console.log(

    //       First_Name,
    // Last_Name,
    // Email,
    // Number,
    // Address,
    // ZIP,
    // Ticket_Purchased

    //      );

    // next try

    // try {
    //   const res = await fetch(`${BACKEND_URL}/api/user-tickets`, {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " +end,
    //     },
    //     body: JSON.stringify({
    //       First_Name,
    //       Last_Name,
    //       Email,
    //       Number,
    //       Address,
    //       ZIP,
    //       Ticket_Purchased}
    //     ),
    //   });
    //   if (res.status != 200) throw Error("Payment failed");
    //   return await res.json();
    // } catch (error) {}
    const local = localStorage.getItem("jwt");
    const parsedj = JSON.parse(local);
    console.log(parsedj)
   let finalid  = parsedj.userid

    // let finalid = parsedj.jwt;
    // console.log('this is the id >===>'+finalid);
    sendo({
      variables: {
        data:{

          First_Name,
          Last_Name,
        Email,
        Number,
        Address,
        ZIP,
        Ticket_Purchased,
        users_permissions_user:finalid
      }
      },
    });
  };

  return (
    <div className="bg-light p-5">
      <div className="container ">
        {show ? (
          <div style={{ marginTop: "150px", marginBottom: "200px" }}>
            <div className="text-center">
              <h3 className="mt-5">Payable Amount Is : ₹{cartTotal}</h3>
              <button
                className="btn btn-success"
                style={{ width: "60%", cursor: "pointer" }}
                onClick={() => makePayment()}
              >
                PAY HERE
              </button>
            </div>
          </div>
        ) : (
          <main>
            <div className="row g-5">
              <div className="container px-5">
                <h4 className="mb-3">Enter Your Address</h4>
                <form className="needs-validation" onSubmit={handleNext}>
                  <div className="row g-3">
                    <div className="col-sm-6 ">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={First_Name}
                        onChange={(e) => {
                          setFirst_Name(e.target.value);
                        }}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-sm-6  ">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={Last_Name}
                        onChange={(e) => {
                          setLast_Name(e.target.value);
                        }}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="col-12 mt-3 ">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-muted"></span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div className="col-12 mt-3 ">
                      <label htmlFor="email" className="form-label">
                        Number <span className="text-muted"></span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="your mobile number"
                        value={Number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div className="col-12 mt-3 ">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 your address"
                        value={Address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your valid address.
                      </div>
                    </div>
                    <div className="col-md-3 mt-3 ">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={ZIP}
                        onChange={(e) => {
                          setZIP(e.target.value);
                        }}
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <hr className="my-4" />
                  <button
                    className="w-100 btn btn-primary btn-lg"
                    type="submit"
                  >
                    Continue to pay
                  </button>
                </form>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default FormCompo;
