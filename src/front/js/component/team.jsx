import React, { useContext, useEffect } from "react";
import "../../styles/team.scss";
import { Context } from "../store/appContext.js";

const Team = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getTeam();
  }, []);
  console.log(store);

  return <div className="team-table"></div>;
};

export default Team;
