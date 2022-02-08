import SideNav from "./SideNav";
import Places from "./Places";

const Info = () => {
  return (
    <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
      <div className="container">
        <div className="row">
         <Places/>
          <SideNav/>
        </div>
      </div>
    </div>
  );
};

export default Info;
