const Places = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
      <div className="tm-article-carousel">
        <article className="tm-bg-white mr-2 tm-carousel-item text-center">
          <img src="img/img-01.jpg" alt="Image" className="img-fluid" />
          <div className="tm-article-pad">
            <header>
              <h3 className="text-uppercase tm-article-title-2">
               Know Why We Are Best In This Business ?
              </h3>
            </header>
            <p>
              Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla.
              Nullam sollicitudin at augue venenatis eleifend. Nulla ligula
              ligula, egestas sit amet viverra id, iaculis sit amet ligula.
            </p>
            <a style={{width:'40%'}}  className="text-uppercase btn-primary tm-btn-primary bg-info text-white">
              Read More
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Places;
