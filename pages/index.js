import NavBar from "../components/NavBar";
import HeroForm from "../components/HeroForm";
import Motive from "../components/Motive";
import BottomHero from "../components/BottomHero";
import Footer from "../components/Footer";
import Info from "../components/info/Info";
import Section from "../components/Section";
import MidImage from "../components/MidImage";

const index = () => {
  return (
    <div>
      <div className="tm-main-content" id="top">
        <div className="tm-top-bar-bg" />
        <HeroForm />
        <Motive />
        <Section />
        <MidImage/>
        <Info />
        <BottomHero />
      </div>
    </div>
  );
};

export default index;
