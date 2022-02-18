import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_KYC } from "../gqloperations/mutations";
import { useRouter } from 'next/router'

const KYC = ({rollId}) => {
    const router = useRouter()
  const [Aadhar, setAadhar] = useState("");
  const [Pan, setPan] = useState("");

  const [upKyc, { data, loading, error }] = useMutation(UPLOAD_KYC);
  if(data) console.log(data)
  if(error) console.log(error)

  const handleSubmit = async (e) => {
     
    e.preventDefault();
    upKyc({
      variables: {
        updateUsersPermissionsUserId: rollId,
        data: {
          Aadhar_Card: Aadhar,
          Pan_Card: Pan,
        },
      },
    });

    await router.push('/')


  };
  return (
    <div>
      <div className="container" style={{ marginTop: "200px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Aadhar Card</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={Aadhar}
              onChange={(e) => {
                setAadhar(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pan Card</label>
            <input
              type="text"
              value={Pan}
              onChange={(e) => {
                setPan(e.target.value);
              }}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container text-center mt-5">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
            
              {
                  data ?
                  
                      data.updateUsersPermissionsUser.data.attributes.Aadhar_Card ?
                      <strong>
                      Thanks, Your Documents Are Recorded, Please give us few hours to varify those details.
                    </strong>
                      
      
                      :
      
                <strong>
                  {"Don't Worry All Of Your Credentils Are Safe And Secure"}
                </strong>
      
                  

                  :

                  ""
              }
            
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
        </div>
      </div>
    </div>
  );
};

export default KYC;
