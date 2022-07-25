import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext.js";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "../../styles/AddClass.scss";

const Addclass = () => {
  const { register, handleSubmit } = useForm();
  const { store, actions } = useContext(Context);

  const requestClasses = (data) => actions.addClasses(data);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="add-service">
          <h4>Add Classes</h4>
          <input type="button" className="ff" value="+" onClick={handleShow} />
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="modal show classes">
        <form action="" method="post" onSubmit={handleSubmit(requestClasses)}>
          <Modal.Header>
            <Modal.Title>Clases</Modal.Title>
            <CloseButton onClick={handleClose} />
          </Modal.Header>

          <Modal.Body>
            <div>
              <div className="inputs-holder">
                <div className="labels-check chk">
                  <label htmlFor="email" className="labels-ls">
                    Hora de empezar:
                  </label>

                  <input
                    type="time"
                    id="start_hour"
                    name="start_hour"
                    className="inputs-ls"
                    placeholder="example@gmail.com"
                    {...register("start_hour")}
                  />

                  <label htmlFor="pwd" className="labels-ls">
                    Hora de terminar:
                  </label>

                  <input
                    type="time"
                    id="end_hour"
                    name="end_hour"
                    className="inputs-ls"
                    placeholder="example@gmail.com"
                    {...register("end_hour")}
                  />
                </div>

                <div className="checkbox-wrap">
                  <p>Seleccione la disponibilidad diaria:</p>
                  <div className="checkbox-holder">
                    <label htmlFor="cbox1">
                      <input
                        type="checkbox"
                        id="cbox1"
                        {...register("monday")}
                      />
                      Lunes
                    </label>
                    <label htmlFor="cbox2">
                      <input
                        type="checkbox"
                        id="cbox2"
                        {...register("tuesday")}
                      />
                      Martes
                    </label>
                    <label htmlFor="cbox3">
                      <input
                        type="checkbox"
                        id="cbox3"
                        {...register("wednesday")}
                      />
                      Miercoles
                    </label>
                    <label htmlFor="cbox4">
                      <input
                        type="checkbox"
                        id="cbox4"
                        {...register("thursday")}
                      />
                      Jueves
                    </label>
                    <label htmlFor="cbox5">
                      <input
                        type="checkbox"
                        id="cbox5"
                        {...register("friday")}
                      />
                      Viernes
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <input
              type="submit"
              value="Anadir"
              className="signup-button"
              onClick={handleClose}
            />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Addclass;
