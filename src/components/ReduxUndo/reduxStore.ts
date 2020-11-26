import { createStore, StoreEnhancer } from 'redux';

import rootReducer from './reduxCombinedReducers';
import { CounterStateType } from './reduxActions';

// saga middleware not needed for Undo/redo only
// saga middleware not necessary for Undo/redo operations

export interface StoreType {
    counterInAppState: {
        past: CounterStateType[];
        present: CounterStateType;
        future: CounterStateType[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any; // this means any other properties in object of any type
    };
}

// an optional initial state, to start with
const startState = {
    counterInAppState: {
        past: [],
        future: [],
        present: {
            counter: 0,
        },
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
