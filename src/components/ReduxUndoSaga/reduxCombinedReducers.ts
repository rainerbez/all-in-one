import { combineReducers } from 'redux';
import undoableCounterReducer from './reduxCounterReducer';

// comibnes all the reducers together - attach to the given names
const rootReducer = combineReducers({
    counterInAppState: undoableCounterReducer,
});

export default rootReducer;
