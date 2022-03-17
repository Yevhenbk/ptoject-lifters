import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext.js";
import "../../styles/modals.scss";

const Setlogin = () => {
  const { register, handleSubmit } = useForm();
  const { store, actions } = useContext(Context);

  const getLogin = (data) => {
    let islogged = actions.login(data);
    console.log(store.islogged);
  };

  return (
    <div className="login-holder">
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(getLogin)}
        className="modal-login"
      >
        <div className="mm-header">
          <h2>Hey,</h2>
          <h2>Login Now.</h2>
          <p>
            <span>If you are new / </span>
            <a className="href-mm" href="#">
              Contact Us
            </a>
          </p>
        </div>

        <div className="mm-body">
          <div className="inputs-holder">
            <input
              type="email"
              id="email"
              name="email"
              className="inputs-ls ls-first"
              placeholder="Email"
              {...register("email")}
            />
            <input
              type="password"
              id="pwd"
              name="pwd"
              className="inputs-ls ls-second"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <p>
            <span>Forgot password / </span>
            <a className="href-mm" href="#">
              Reset
            </a>
          </p>
        </div>

        <div className="mm-footer">
          <input type="submit" value="Login" className="signup-button" />
        </div>
      </form>
    </div>
  );
};

export default Setlogin;
