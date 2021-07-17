import React from "react";
import { deleteTechs } from "../../actions/techAction";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItems = ({ tech: { id, firstName, lastName }, deleteTechs }) => {
  const onDelete = () => {
    deleteTechs(id);
    M.toast({ html: "Technician is Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName}
        {"  "} {lastName}
        <a href="!#" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTechs })(TechItems);
