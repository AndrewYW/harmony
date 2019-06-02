import { combineReducers } from 'redux';
import loading from './loading_reducer';
import channel from './ui/ui_channel_reducer';
import server from './ui/ui_server_reducer';
import users from './ui/ui_user_reducer';

const uiReducer = combineReducers({
  loading,
  channel,
  server,
  users,
});

export default uiReducer;