import { Reducer, AnyAction } from 'redux';
import undoable from 'redux-undo';
import { ActionTypes, CounterStateType } from './reduxActions';

// the initial ShowState, accoring to the interface in the actions.ts
export const initialCounterState: CounterStateType = {
    counter: 0,
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<CounterStateType, AnyAction> = (
    state = initialCounterState,
    action,
) => {
    switch (action.type) {
        case ActionTypes.ADD_ONE: {
            return {
                counter: state.counter + 1,
            };
        }
        case ActionTypes.SUB_ONE: {
            return {
                counter: state.counter - 1,
            };
        }
        case ActionTypes.ADD_MULTI: {
            // eslint-disable-next-line no-console
            console.log(action.title);
            return {
                counter: state.counter + action.amount,
            };
        }
        default: {
            return state;
        }
    }
};

// export { reducer as counterReducer };

const undoableCounterReducer = undoable(reducer, {
    limit: 10, // set a limit for the size of the history
});

export default undoableCounterReducer;
