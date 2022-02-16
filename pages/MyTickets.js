import { useEffect ,useState} from "react";
import { useQuery } from "@apollo/client";
import { GET_INDIVIDUAL_TICKET } from "../gqloperations/queries";
import { useRouter } from 'next/router'
import Link from 'next/link'

const MyTickets = () => {

    
    const router = useRouter()

  let end 


  if ( typeof window !== 'undefined' && localStorage.getItem("jwt")){

      
      const wna = localStorage.getItem("jwt");
      const fine = JSON.parse(wna);

      end = fine.userid;
    console.log(end);
    
}
    
    
if (typeof window !== 'undefined' && !localStorage.getItem("jwt")) {
    <h1 className="text-center">Method Not Allowed</h1>
    router.push('/')
}

    

    const { loading, data, error } = useQuery(GET_INDIVIDUAL_TICKET, {
        variables: {
            usersPermissionsUserId: end,
        },
    });

  if(data) console.log(data)

  if(error) console.log(error)







  return (
    <div>
      {
      data  ?
      <>
      
      <div style={{ marginTop: "150px" }} className="container">
        <h1 className="text-center">
          Hii {data.usersPermissionsUser.data.attributes.username}, Find Your Flight Ticket Below.
        </h1>
      
      </div>
      {
           data.usersPermissionsUser.data.attributes.user_tickets.data == 0?
           <>


            <h4 className="text-center" style={{marginTop:'100px'}}>{"You Don't Have Any Tickets Yet"}</h4>

            <div className="text-center mt-4">
                <Link href='/Flights'>
                <button className="btn btn-primary">Book Tickets</button>
                </Link>
            </div>

           </>
           :


        
            data.usersPermissionsUser.data.attributes.user_tickets.data.map((hit)=>{
                return <div
                className="container mt-5"
                style={{
                  borderStyle: "solid",
                  borderColor: "black",
                  borderRadius: "20px",
                  padding: "10px",
                }}
                key={hit.id}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4">
                      <p className="text-center">
                        From <b>{hit.attributes.Depart}</b> to <b>{hit.attributes.Arrival}</b>
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <p className="text-center">
                        {" "}
                        <b>{hit.attributes.Date}</b>{" "}
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <a
                        style={{ textDecoration: "none" }}
                        target="__blank"
                        href={`http://192.168.43.53:3000${hit.attributes.PDF.data.attributes.url}`}
                      >
                        {" "}
                        <p className="text-center">
                          <b>Donwload Now</b>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>



            })
        

      }


      
    </>



      :
""


      
      
      }
      
    </div>
  );
};

export default MyTickets;
