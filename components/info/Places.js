import { useQuery } from '@apollo/client';
import {HOME_DATA} from '../../gqloperations/queries'
// import {BACKEND_URL} from '../helper/baseUrl'

const Places = () => {

  
  const {data,loading,error} = useQuery(HOME_DATA)

  if(data) console.log(data)
  if(error) console.log(error)



  return (
    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
      {
        data ?



      
      <div className="tm-article-carousel">
        <article className="tm-bg-white mr-2 tm-carousel-item text-center">
          <img src="img/img-01.jpg" alt="Image" className="img-fluid" />
          <div className="tm-article-pad">
            <header>
              <h3 className="text-uppercase tm-article-title-2">
              {data.header.data.attributes.Info_Title}
              </h3>
            </header>
            <p>
            {data.header.data.attributes.Info_Desc}
            </p>
            <a href='tel:+9112345678' style={{width:'40%'}}  className="text-uppercase btn-primary tm-btn-primary bg-info text-white">
              Call Us Now
            </a>
          </div>
        </article>
      </div>

      :
      ""
}
    </div>
  );
};

export default Places;
