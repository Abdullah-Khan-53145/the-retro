import { TOGGLE_MODAL } from "../actions/actions";

const initialState = false;

const setToggleModal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default setToggleModal;
