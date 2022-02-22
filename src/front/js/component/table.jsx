import React, { useContext, useEffect } from "react";
import "../../styles/table.scss";
import { Context } from "../store/appContext.js";

const Table = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getClasses();
  }, []);
  console.log(store);

  return (
    <div className="table">
      <div className="table-holder">
        <h2>Weekly Schedule</h2>
        <div className="week-day-table">
          <div className="week-day">
            <div className="week-day-ho">
              <p>Lunes</p>
              {store.classes.map((classes, index) => {
                console.log(
                  classes,
                  "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
                );
                return (
                  <div key={`classes-${index}`}>
                    <div className="get-class">
                      <p>{classes.start_hour}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="week-day-ho">
              <p>Martes</p>
              {/* map */}
            </div>
          </div>
          <div className="week-day">
            <div className="week-day-ho">
              <p>Miercoles</p>
              {/* map */}
            </div>
            <div className="week-day-ho">
              <p>Jueves</p>
              {/* map */}
            </div>
          </div>
          <div className="week-day">
            <div className="week-day-ho">
              <p>Viernes</p>
              {/* map */}
            </div>
            <div className="week-day-ho">
              <p>Sabado</p>
              {/* map */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
