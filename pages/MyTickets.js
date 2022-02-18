import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_INDIVIDUAL_TICKET } from "../gqloperations/queries";
import { useRouter } from "next/router";
import Link from "next/link";
import KYC from '../components/KYC'

const MyTickets = () => {
   const[showKyc,setShowKyc] = useState(false)

useEffect(()=>{
  setShowKyc(false)
},[])

const kycButtonClicked = () =>{
  setShowKyc(true)
}

  const router = useRouter();


  let end;

  if (typeof window !== "undefined" && localStorage.getItem("jwt")) {
    const wna = localStorage.getItem("jwt");
    const fine = JSON.parse(wna);

    end = fine.userid;
    console.log(end);
  }

  if (typeof window !== "undefined" && !localStorage.getItem("jwt")) {
    <h1 className="text-center">Method Not Allowed</h1>;
    router.push("/");
  }

  const { loading, data, error } = useQuery(GET_INDIVIDUAL_TICKET, {
    variables: {
      usersPermissionsUserId: end,
    },
  });

  if (data) console.log(data);

  if (error) console.log(error);

  return (
    <div>
      {
        showKyc ?
        <KYC rollId={end} />

        :
        <>
        {data ? (
        <>
        {
            data.usersPermissionsUser.data.attributes.Pan_Card ===  "null"  ? 
            <div style={{ marginTop: "150px" }} className="container">
           
          </div>

            :
            <div style={{ marginTop: "150px" }} className="container">
            <h1 className="text-center">
              Hii {data.usersPermissionsUser.data.attributes.username}, Welcome
              To Your Dashboard
            </h1>
          </div>

        }
          
          {data.usersPermissionsUser.data.attributes.Pan_Card ===  "null" ? (
            <div className="mt-5 text-center">
              <img
                className="img-fluid"
                width={100}
                src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                alt=""
              />
              <div
                className="alert alert-danger alert-dismissible fade show mt-3"
                role="alert"
              >
                <strong>
                <h1>Currently You Are Not Able To Book Any Ticket Here</h1>

                </strong>
                <p>
                First we need to KYC your account so that we approve you to book
                tickets from here
              </p>
                
              </div>

              
              <div className="text-center">
                <button onClick={kycButtonClicked} className="btn btn-primary">Complete Your KYC</button>
              </div>
            </div>
          ) : data.usersPermissionsUser.data.attributes.user_tickets.data ==
            0 ? (
            <>
              <h4 className="text-center" style={{ marginTop: "100px" }}>
                {"You Don't Have Any Tickets Yet"}
              </h4>

              <div className="text-center mt-4">
                <Link href="/Flights">
                  <button className="btn btn-primary">Book Tickets</button>
                </Link>
              </div>
            </>
          ) : (
            data.usersPermissionsUser.data.attributes.user_tickets.data.map(
              (hit) => {
                return (
                  <div
                    className="container mt-5"
                    style={{
                      borderStyle: "solid",
                      borderColor: "black",
                      borderRadius: "20px",
                      padding: "10px",
                      backgroundColor: "#40C7F5",
                    }}
                    key={hit.id}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-4">
                          <p className="text-center text-dark">
                            From{" "}
                            <b>
                              {hit.attributes.Ticket_Purchased[0].departPlace}
                            </b>{" "}
                            to{" "}
                            <b>
                              {hit.attributes.Ticket_Purchased[0].arrivalPlace}
                            </b>
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <p className="text-center text-dark">
                            <b>
                              {hit.attributes.Ticket_Purchased[0].dep} &#160;
                              <i className="fas fa-arrow-alt-circle-right"></i>
                              &#160;{
                                hit.attributes.Ticket_Purchased[0].arriv
                              }{" "}
                            </b>
                          </p>
                        </div>
                        {hit.attributes.PDF.data == null ? (
                          <div className="col-sm-4">
                            <a style={{ textDecoration: "none" }}>
                              <p className="text-center">
                                <b className="text-danger">
                                  Your Invoice Will Appear Here Soon
                                </b>
                              </p>
                            </a>
                          </div>
                        ) : (
                          <div className="col-sm-4">
                            <a
                              style={{ textDecoration: "none" }}
                              target="__blank"
                              href={`http://192.168.43.53:3000${hit.attributes.PDF.data.attributes.url}`}
                            >
                              {" "}
                              <p
                                style={{ cursor: "pointer" }}
                                className="swings text-center text-dark"
                              >
                                <b>Donwload Now</b>
                              </p>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )
          )}
        </>
      ) : (
        ""
      )}
        
        </>



      }
      
    </div>
  );
};

export default MyTickets;
