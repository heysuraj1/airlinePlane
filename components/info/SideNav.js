const SideNav = () => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-recommended-container">
        <div className="tm-bg-white">
          <div className="tm-bg-primary tm-sidebar-pad">
            <h3 className="tm-color-white tm-sidebar-title">
              Great Places To Visit
            </h3>
            {/* <p className="tm-color-white tm-margin-b-0 tm-font-light">
              Enamel pin cliche tilde, kitsch and VHS thundercats
            </p> */}
          </div>
          <div className="tm-sidebar-pad-2">
            <a  className="media tm-media tm-recommended-item">
              <img src="img/tn-img-01.jpg" alt="Image" />
              <div className="media-body tm-media-body tm-bg-gray">
                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
                Taj Mahal
                </h4>
              </div>
            </a>
            <a  className="media tm-media tm-recommended-item">
              <img src="img/tn-img-02.jpg" alt="Image" />
              <div className="media-body tm-media-body tm-bg-gray">
                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
                Ranthambore National Park
                </h4>
              </div>
            </a>
            <a  className="media tm-media tm-recommended-item">
              <img src="img/tn-img-03.jpg" alt="Image" />
              <div className="media-body tm-media-body tm-bg-gray">
                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
                Amber Palace
                </h4>
              </div>
            </a>
            <a  className="media tm-media tm-recommended-item">
              <img src="img/tn-img-04.jpg" alt="Image" />
              <div className="media-body tm-media-body tm-bg-gray">
                <h4 className="text-uppercase tm-font-semibold tm-sidebar-item-title">
                Hawa Mahal
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}

export default SideNav;