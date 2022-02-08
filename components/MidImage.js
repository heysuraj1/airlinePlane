import { Parallax } from "react-parallax";

const MidImage = () => {
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
                <h2 className="text-danger"><b>Who Are We ?</b></h2>
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
