import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

const FormCompo = () => {
  const { isEmpty, items, removeItem, cartTotal, emptyCart } = useCart();
  const [show, setShow] = useState();
  const router = useRouter()

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
        handleSubmit()
        emptyCart()
        router.push('/')
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleNext = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const handleSubmit = () => {
    console.log("Form Submitted");

  };

  return (
    <div className="bg-light p-5">
      <div className="container ">
        {show ? (
          <div style={{ marginTop: "150px",marginBottom:'200px' }}>
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
                      <input type="text" className="form-control" required />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-sm-6  ">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input type="text" className="form-control" required />
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
                      <input type="text" className="form-control" required />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-check mt-3 ">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="same-address">
                      I am agreeging with all the terms & conditions and willing
                      to purchase ticket from this website.
                    </label>
                  </div>
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
