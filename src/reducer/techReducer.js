import {
  TECHS_ERROR,
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
  ADD_TECH,
} from "../actions/type";
const initialState = {
  tech: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, tech: action.payload, loading: false };
    case ADD_TECH:
      return {
        ...state,
        tech: [...state.tech, action.payload],
        loading: false,
      };

    case DELETE_TECH:
      return {
        ...state,
        tech: state.tech.filter((tech) => tech.id !== action.payload),
        loading: false,
      };

    case SET_LOADING:
      return { ...state, loading: true };
    case TECHS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
