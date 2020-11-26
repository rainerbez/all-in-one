import { combineReducers } from 'redux';
import { counterReducer } from './reduxCounterReducer';

// comibnes all the reducers together - attach to the given names
const rootReducer = combineReducers({
    counterInAppState: counterReducer,
});

export default rootReducer;
