import { Reducer, AnyAction } from 'redux';
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

export { reducer as counterReducer };
