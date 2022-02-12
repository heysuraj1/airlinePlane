import {isMobile} from 'react-device-detect';
import {useState} from 'react'

const Footer = () => {

  const [show,setShow] = useState()



  if(isMobile){
    setShow(

      <footer className="tm-bg-dark-blue fixed-bottom">
      <div className="container">
        <div className="row">
          <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
           this is pc
           </p>        
        </div>
      </div>                
    </footer>
    )
   


   
  }

    <footer className="tm-bg-dark-blue fixed-bottom">
    <div className="container">
      <div className="row">
        <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
        This is mobile
         </p>        
      </div>
    </div>                
  </footer>


 
    return (
      <>
      {show}
      </>

    
    );
}

export default Footer;