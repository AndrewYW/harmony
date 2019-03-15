import { combineReducers } from 'redux';
import loading from './loading_reducer';
import channel from './ui/ui_channel_reducer';

const uiReducer = combineReducers({
  loading,
  channel,
});

export default uiReducer;