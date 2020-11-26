import { createStore, StoreEnhancer } from 'redux';
import rootReducer from './reduxCombinedReducers';
import { CounterStateType } from './reduxActions';

export interface StoreType {
    counterInAppState: CounterStateType;
}

// an optional initial state, to start with
const startState = {
    counterInAppState: {
        counter: 0,
    },
};

// to run the devtools in browser
type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<
        unknown,
        Record<string, unknown>
    >;
};

const isReduxDevtoolsExtenstionExist = (
    arg: Window | WindowWithDevTools,
): arg is WindowWithDevTools => {
    return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
};

// start the store with a start state
const rootStore = createStore(
    rootReducer,
    startState,
    isReduxDevtoolsExtenstionExist(window)
        ? // eslint-disable-next-line no-underscore-dangle
          window.__REDUX_DEVTOOLS_EXTENSION__()
        : undefined,
);

export default rootStore;
