import NavBar from "../components/NavBar";
import HeroForm from "../components/HeroForm";
import Motive from "../components/Motive";
import BottomHero from "../components/BottomHero";
import Footer from "../components/Footer";
import Info from "../components/info/Info";
import Section from "../components/Section";
import MidImage from "../components/MidImage";
import {GET_USER} from '../gqloperations/queries'
import Link from 'next/link'
import { useQuery } from "@apollo/client";


const Index = () => {

 



  return (
    <div>
      
      <div className="tm-main-content" id="top">
        <div className="tm-top-bar-bg" />
        <HeroForm />
        {/* <Motive /> */}
        <Section />
        <MidImage/>
        <Info />
        <BottomHero />
      </div>
    </div>
  );
};

export default Index;
