import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Searchbar from "./component/layout/Searchbar";
import Logs from "./component/Logs/Logs";
import TechListModal from "./component/Techs/TechListModal";
import AddBtn from "./component/layout/AddBtn";
import AddLogModal from "./component/Logs/AddLogModal";
import EditLogModal from "./component/Logs/EditLogModal";
import AddTechModal from "./component/Techs/AddTechModel";
import { Provider } from "react-redux";
import store from "./store.js";

const App = () => {
  useEffect(() => {
    //Init Materialize Js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <Logs />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
