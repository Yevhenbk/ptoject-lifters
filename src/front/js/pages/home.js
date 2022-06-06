import React, { useContext } from "react";
import { Context } from "../store/appContext";
import LucNav from "../luc/Navbar/LucNav.jsx";
import Slider from "../luc/Slider/Slider.jsx";
import Opinions from "../luc/Opinions/Opinions.jsx";
import Info from "../luc/Info/Info.jsx";
import CoachSide from "../luc/CoachSide/CoachSide.jsx";
import SmoothScrolling from "../component/SmoothScrolling/SmoothScrolling.js";
import ContactForm from "../luc/CoantactForm/ContactForm.jsx";
import Installs from "../component/installs.jsx";
import CustomCursor from "../component/CustomCursor/CustomCursor.jsx";
import SemiCards from "../luc/SemiCards/SemiCards.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <><CustomCursor />
      <LucNav />
      <SmoothScrolling>
        <div className="luc__home">
          <Slider />
          <Opinions />
          <Info />
          <CoachSide />
          <SemiCards />
          <ContactForm />
          {/* <Installs /> */}
        </div>
      </SmoothScrolling>
    </>
  );
};
