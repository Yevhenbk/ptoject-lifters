import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext.js";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "../../styles/modals.scss";

const Registeradmin = () => {
  const { register, handleSubmit } = useForm();
  const { store, actions } = useContext(Context);

  const getAdmin = (data) => {
    actions.registerAdmin(data);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="add-acc">
          <input
            type="button"
            className="ff-rec"
            value="Registro Admin"
            onClick={handleShow}
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal show">
        <form action="" method="post" onSubmit={handleSubmit(getAdmin)}>
          <Modal.Header>
            <Modal.Title>Register Admin</Modal.Title>
            <CloseButton onClick={handleClose} />
          </Modal.Header>

          <Modal.Body>
            <div>
              <div className="inputs-holder">
                <label htmlFor="pwd" className="labels-ls">
                  Name:
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="inputs-ls"
                  {...register("name")}
                />

                <label htmlFor="pwd" className="labels-ls">
                  Lastname:
                </label>

                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="inputs-ls"
                  {...register("lastname")}
                />

                <label htmlFor="email" className="labels-ls">
                  Email:
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="inputs-ls"
                  {...register("email")}
                />

                <label htmlFor="pwd" className="labels-ls">
                  Password:
                </label>

                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  className="inputs-ls"
                  {...register("password")}
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <input
              type="submit"
              value="Registrar"
              className="signup-button"
              onClick={handleClose}
            />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Registeradmin;
