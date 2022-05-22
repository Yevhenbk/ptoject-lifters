import React, { useContext } from "react";
import { Context } from "../store/appContext";
import LucNav from "../luc/Navbar/LucNav.jsx";
import Slider from "../luc/Slider/Slider.jsx";
import Opinions from "../luc/Opinions/Opinions.jsx";
import Info from "../luc/Info/Info.jsx";
import CoachSide from "../luc/CoachSide/CoachSide.jsx";
import SmoothScrolling from "../component/SmoothScrolling/SmoothScrolling.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <LucNav />
      <SmoothScrolling>
        <div className="luc__home">
          <Slider />
          <Opinions />
          <Info />
          <CoachSide />
        </div>
      </SmoothScrolling>
    </>
  );
};
