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
              {store.clases
                .filter((c) => c.monday === true)
                .map((filteredClass) => (
                  <div className="get-class">
                    <p>{filteredClass.start_hour}</p>
                    <span>-</span>
                    <p>{filteredClass.end_hour}</p>
                  </div>
                ))}
            </div>
            <div className="week-day-ho">
              <p>Martes</p>
              {store.clases
                .filter((c) => c.tuesday === true)
                .map((filteredClass) => (
                  <div className="get-class">
                    <p>{filteredClass.start_hour}</p>
                    <span>-</span>
                    <p>{filteredClass.end_hour}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="week-day">
            <div className="week-day-ho">
              <p>Miercoles</p>
              {store.clases
                .filter((c) => c.wednesday === true)
                .map((filteredClass) => (
                  <div className="get-class">
                    <p>{filteredClass.start_hour}</p>
                    <span>-</span>
                    <p>{filteredClass.end_hour}</p>
                  </div>
                ))}
            </div>
            <div className="week-day-ho">
              <p>Jueves</p>
              {store.clases
                .filter((c) => c.thursday === true)
                .map((filteredClass) => (
                  <div className="get-class">
                    <p>{filteredClass.start_hour}</p>
                    <span>-</span>
                    <p>{filteredClass.end_hour}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="week-day">
            <div className="week-day-ho">
              <p>Viernes</p>
              {store.clases
                .filter((c) => c.friday === true)
                .map((filteredClass) => (
                  <div className="get-class">
                    <p>{filteredClass.start_hour}</p>
                    <span>-</span>
                    <p>{filteredClass.end_hour}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
