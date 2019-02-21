import { START_LOADING, STOP_LOADING } from '../actions/session_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;