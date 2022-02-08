const BottomHero = () => {
    return (
        <div className="tm-section tm-section-pad tm-bg-img tm-position-relative" id="tm-section-6">
    <div className="container ie-h-align-center-fix">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
          <div id="google-map" />        
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0">
          <div className="tm-bg-white tm-p-4">
            <form action="index.html" method="post" className="contact-form">
              <div className="form-group">
                <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea id="contact_message" name="contact_message" className="form-control" rows={9} placeholder="Message" required defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary tm-btn-primary">Send Message Now</button>
            </form>
          </div>                            
        </div>
      </div>        
    </div>
  </div>
    );
}

export default BottomHero;