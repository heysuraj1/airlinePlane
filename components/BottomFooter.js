import { useMutation, useQuery } from '@apollo/client';
import {POST_CONTACT} from '../gqloperations/mutations'
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const BottomFooter = () => {
    const [formData, setFormData] = useState({});
    const [show, setShow] = useState('');
    

    const  [ senddata ,{ loading,error,data }] =  useMutation(POST_CONTACT)


    // if(loading) return( 
    //   toast('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     })
    // // <h3 className='text-center mt-5 text-success' ><b>Wait We Are Sending Your Request</b></h3>
    // )
    
    if(error) return(  <h3 className='mt-5 text-danger' ><b>It Seems Like, there is some issue please try later</b></h3>)





    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        senddata({
          variables: {
            data: formData,
          },
        });
        console.log(data);
        toast('Form Submitted', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      };






    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0">
            <div className="tm-bg-white tm-p-4">

                
              <form  onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                  
                    name='Name'
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                   
                    name='Email' 
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                   
                    name='Subject'
                    className="form-control"
                    placeholder="Subject"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
           
                    name='Message'
                    className="form-control"
                    rows={9}
                    placeholder="Message"
                    required
                    onChange={handleChange}
                   
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary tm-btn-primary"
                >
                  Send Message Now
                </button>
              </form>
            </div>
          </div>
    );
}

export default BottomFooter;