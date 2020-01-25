import { combineReducers } from 'redux';
import clockReducer from './clockReducer';
import themeReducer from './themeReducer';

export default combineReducers({
    clockReducer,
    themeReducer,
});
