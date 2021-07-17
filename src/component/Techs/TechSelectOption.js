import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techAction";

const TechSelectOption = ({ getTechs, tech: { tech, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    !loading &&
    tech !== null &&
    tech.map((t) => {
      return (
        <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
          {t.firstName}
          {t.lastName}
        </option>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
