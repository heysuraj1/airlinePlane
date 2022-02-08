import NavBar from "../components/NavBar";
import HeroForm from "../components/HeroForm";
import Motive from "../components/Motive";
import BottomHero from "../components/BottomHero";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Section from "../components/Section";

const index = () => {
  return (
    <div>
      <div className="tm-main-content" id="top">
        <div className="tm-top-bar-bg" />
        {/* <NavBar /> */}
        <HeroForm />
        <Motive />
        <Section />
        <Info />
        <BottomHero />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default index;
