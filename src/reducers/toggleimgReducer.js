import { TOGGLE_IMG } from "../actions/actions";

const initialState = false;

const setToggleImg = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IMG:
      return action.payload;
    default:
      return state;
  }
};

export default setToggleImg;
