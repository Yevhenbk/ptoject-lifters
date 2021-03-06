import React, { useContext } from "react";
import { Context } from "../store/appContext";
import LucNav from "../luc/Navbar/LucNav.jsx";
import Slider from "../luc/Slider/Slider.jsx";
import Opinions from "../luc/Opinions/Opinions.jsx";
import Info from "../luc/Info/Info.jsx";
import CoachSide from "../luc/CoachSide/CoachSide.jsx";
import SmoothScrolling from "../component/SmoothScrolling/SmoothScrolling.js";
import ContactForm from "../luc/CoantactForm/ContactForm.jsx";
import Installs from "../component/Installs/Installs.jsx";
import CustomCursor from "../component/CustomCursor/CustomCursor.jsx";
import SemiCards from "../luc/SemiCards/SemiCards.jsx";
import HorizontalBrake from "../component/HorizontalBrake/HorizontalBrake.jsx";
import OpenCards from "../luc/OpenCards/OpenCards.jsx";
import Footer from "../luc/Footer/Footer.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <><CustomCursor />
      <LucNav />
      <SmoothScrolling>

        <Slider />
        <Opinions />
        <Info /><CoachSide /><SemiCards />
        {/* 
          
          <OpenCards />
          <ContactForm />
          <Installs />
          <Footer /> */}

      </SmoothScrolling>
    </>
  );
};
