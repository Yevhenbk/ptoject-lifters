import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext.js";
import "../../../styles/modals.scss";

const Setlogin = () => {
  const { register, handleSubmit } = useForm();
  const { store, actions } = useContext(Context);

  const getLogin = (data) => {
    let islogged = actions.login(data);
    console.log(store.islogged);
  };

  return (
    <div className="login__holder">
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(getLogin)}
        className="modal__login"
      >
        <div className="mm__header">
          <h2>Hey,</h2>
          <h2>Login Now.</h2>
          <p>
            <span>If you are new / </span>
            <a className="href__mm" href="#">
              Contact Us
            </a>
          </p>
        </div>

        <div className="mm__body">
          <div className="inputs__holder">
            <input
              type="email"
              id="email"
              name="email"
              className="inputs__ls ls__first"
              placeholder="Email"
              {...register("email")}
            />
            <input
              type="password"
              id="pwd"
              name="pwd"
              className="inputs__ls ls__second"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <p>
            <span>Forgot password / </span>
            <a className="href__mm" href="#">
              Reset
            </a>
          </p>
        </div>

        <div className="mm__footer">
          <input type="submit" value="Login" className="signup__button" />
        </div>
      </form>
    </div>
  );
};

export default Setlogin;
