import React, { useContext, useEffect } from "react";
import "../../styles/profcard.scss";
import { Context } from "../store/appContext.js";

const Members = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAccs();
  }, []);
  console.log(store);

  return (
    <div className="members">
      <div className="members-holder">
        <h4>List of Accounts</h4>
        <div className="members-table">
          {store.accounts.map((acc) => (
            <div className="get-acc">
              <p>
                {acc.name} {acc.lastname}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
