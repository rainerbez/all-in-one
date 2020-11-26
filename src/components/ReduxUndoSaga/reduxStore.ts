import {
    createStore,
    StoreEnhancer,
    applyMiddleware, // needed for Saga
    compose, // needed for Saga
} from 'redux';

// const redxuDevToolsMiddleware=isReduxDevtoolsExtenstionExist(window) ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
// needed for Saga
import createSagaMiddleware from 'redux-saga';
// run/prepare the saga middleware
import rootSaga from './sagas';

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

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// start the store with a start state
const rootStore = createStore(
    rootReducer,
    startState,
    compose(
        applyMiddleware(...middlewares),
        isReduxDevtoolsExtenstionExist(window)
            ? // eslint-disable-next-line no-underscore-dangle
              window.__REDUX_DEVTOOLS_EXTENSION__()
            : // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (noop: any) => noop,
    ),
);

sagaMiddleware.run(rootSaga);

export default rootStore;
