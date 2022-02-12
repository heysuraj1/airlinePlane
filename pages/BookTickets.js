import Link from "next/link";
import { useCart } from "react-use-cart";
import Flight from '../components/Flight'

const BookTickets = () => {
  const { isEmpty, items, removeItem ,cartTotal,emptyCart} = useCart();

  if (isEmpty)
    return(

      <>
     <h1 className="text-center" style={{ marginTop: "200px" }}>Please Book A Flight First</h1>;
     <Flight/>
    </>
      )
  if (items) console.log(items);

  const removeFlight = (e) => {
    removeItem(e);
  };

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
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container">
        <h3 className="text-center">Your Flights Are Waiting To Be Booked.</h3>
      </div>

      <div className="container-fluid mt-5">
        <div className="container-fluid">
          <div className="row">
            {items.map((hit) => {
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
                        07:45 <i className="fas fa-arrow-alt-circle-right"></i>{" "}
                        12:00
                      </div>
                      <div className="col mt-3">₹{hit.price}</div>
                      <div className="col mt-3">
                        <div className="text-center">
                          <button
                            style={{ width: "100%", cursor: "pointer" }}
                            className="btn btn-info"
                            onClick={() => makePayment()}
                          >
                            BOOK
                          </button>
                        </div>
                      </div>
                      <div className="col mt-3">
                        <div className="text-center">
                          <button
                            style={{ width: "100%", cursor: "pointer" }}
                            className="btn btn-danger"
                            onClick={() => removeFlight(hit.id)}
                          >
                            Remove
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
    </div>
  );
};

export default BookTickets;
