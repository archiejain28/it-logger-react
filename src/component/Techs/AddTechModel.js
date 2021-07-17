import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTechs } from "../../actions/techAction";

const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a firstName and lastName" });
    } else {
      addTechs({
        firstName,
        lastName,
      });

      M.toast({ html: `${firstName} ${lastName} is added` });

      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content ">
        <h4>Add Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor="firstName" className="active">
              FirstName
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label htmlFor="lastName" className="active">
              LastName
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-green btn-flat"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addTechs })(AddTechModal);
