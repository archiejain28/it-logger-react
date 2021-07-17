import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./type";
import {JSON_API} from "../Constant/constant";

export const addLogs = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`${JSON_API}/logs`, {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`${JSON_API}/logs/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`${JSON_API}/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`${JSON_API}/logs`);
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`${JSON_API}/logs?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
