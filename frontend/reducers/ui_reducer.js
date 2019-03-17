import { combineReducers } from 'redux';
import loading from './loading_reducer';
import channel from './ui/ui_channel_reducer';
import users from './ui/ui_user_reducer';

const uiReducer = combineReducers({
  loading,
  channel,
  users,
});

export default uiReducer;