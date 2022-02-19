import { useQuery } from '@apollo/client';
import {HOLIDAY_PACKAGE} from '../gqloperations/queries'
import {BACKEND_URL} from '../helper/baseUrl'



const Section = () => {

 const {data,loading,error} = useQuery(HOLIDAY_PACKAGE)

 if(data) console.log(data)
 if(loading) console.log(loading)
 if(error) console.log(error)





  return (
    <div className="tm-section tm-position-relative">
      <div className="container tm-pt-5 tm-pb-4">
        <div className="row text-center">
          <div className="container">
            <h2 className="tm-color-primary text-center mb-5">
              <b> Our Holiday Packages </b>
            </h2>
          </div>
          {
            data ?
          
          
            data.holidayPackages.data.map((hit)=>{
              return <article
              style={{ cursor: "pointer" }}
              className="col-sm-12 col-md-3 col-lg-3 col-xl-3 tm-article"
              key={hit.id}
            >
              <div className="container text-center">
                <img
                  src={BACKEND_URL+`${hit.attributes.Image.data.attributes.url}`}
                  className="img-fluid imgholi"
                  alt=""
                />
              </div>
              <h3 className="tm-color-primary tm-article-title-1 mt-5">
               {hit.attributes.Heading}
              </h3>
  
              
            </article>
            })
          
          :

          ""
        }

        
        </div>
      </div>
    </div>
  );
};

export default Section;
