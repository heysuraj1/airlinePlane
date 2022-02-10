import { Parallax } from "react-parallax";
import Link from "next/link";
import { FILTER_TICKETS } from "../gqloperations/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import {BACKEND_URL} from '../helper/baseUrl'


const MidImage = () => {
  const [depart,setDepart] = useState();
  const [desti,setDesti] = useState();
  const [date,setDate] = useState();

  const [getTicket,{data,loading,error}] =   useLazyQuery(FILTER_TICKETS,{
    variables:{
      "filters": {
        "Depart_place": {
          "startsWith": "India"
        },
        "Arrival_place": {
          "startsWith": "New York"
        },
        "Date": {
          "gt": "2022-03-02"
        }
      }
    }
  })








  return (
    <div>
      <Parallax
        blur={10}
        bgImage="/img/parallax-image.jpg"
        bgImageAlt="the cat"
        strength={-500}
      >
        <div className="container mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 mt-5">
                <h2 className="text-info"><b>Who Are We ?</b></h2>
                <p className="text-white"> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita inventore deserunt nostrum eaque consequuntur nihil?
                  Facilis eaque dolorem placeat earum possimus nam, asperiores,
                  maiores corrupti et ex officia ducimus inventore. Nulla harum
                  dicta voluptatibus? Dignissimos ullam natus adipisci aut,
                  vitae non velit culpa hic, rerum tempora earum ea aliquid,
                  provident magnam sapiente fuga. Voluptatibus quia inventore
                  molestiae delectus ullam facere.
                </p>
              </div>
              <div className="col-sm-6">
                  <div className="text-center">

                <img className="img-fluid" src="/img/airplane.png" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MidImage;
