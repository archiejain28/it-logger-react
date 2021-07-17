import React, { useEffect, useState } from "react";
import { getTechs } from "../../actions/techAction";
import TechItems from "./TechItems";
import { connect } from "react-redux";

const Techs = ({ getTechs, tech: { tech, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  if (loading) {
    <h4>Loading ....</h4>;
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Technician List</h4>
        <ul className="collection">
          {!loading &&
            tech !== null &&
            tech.map((tech) => {
              return <TechItems tech={tech} key={tech.id} />;
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(Techs);
