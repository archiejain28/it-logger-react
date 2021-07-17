import React, { useEffect, useState } from "react";
import LogItems from "./LogItems";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logAction";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    <h4>Loading ....</h4>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {!loading && logs === null ? (
        <p className="center">No logs to show....</p>
      ) : (
        logs.map((log) => {
          return <LogItems log={log} key={log.id} />;
        })
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
