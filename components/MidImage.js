import { Parallax } from "react-parallax";
import { useQuery } from '@apollo/client';
import {HOME_DATA} from '../gqloperations/queries'
import {BACKEND_URL} from '../helper/baseUrl'


const MidImage = () => {


  const {data,loading,error} = useQuery(HOME_DATA)

  if(data) console.log(data)
  if(error) console.log(error)






  return (
    <div>
      <Parallax
        blur={10}
        bgImage="/img/parallax-image.jpg"
        bgImageAlt="the cat"
        strength={-500}
      >
        {
          data ?

          
          <div className="container mt-5 mb-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 mt-5">
                  <h2 className="text-info"><b>{data.header.data.attributes.Mid_About_Title}</b></h2>
                  <p className="text-white"> 
                  {data.header.data.attributes.Mid_About_Text}
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

          :

          ""
        }
      </Parallax>
    </div>
  );
};

export default MidImage;
