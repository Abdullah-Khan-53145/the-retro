import { LOG_IN, LOG_OUT } from "../actions/actions";

const initialState = JSON.parse(localStorage.getItem("user"));

const setUser = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    case LOG_OUT:
      localStorage.setItem("user", null);
      return null;
    default:
      return state;
  }
};

export default setUser;
