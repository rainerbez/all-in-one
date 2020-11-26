// all the possible actions
// eslint-disable-next-line no-shadow
export enum ActionTypes {
    ADD_ONE = 'ADD_ONE',
    SUB_ONE = 'SUB_ONE',
    ADD_MULTI = 'ADD_MULTI',
}

export interface CounterStateType {
    readonly counter: number;
}

interface SimpleActionType {
    type: ActionTypes;
}

interface AddMultiActionType {
    type: ActionTypes;
    title: string;
    amount: number;
}

// creates the Add_Note object action to be dispatched
const addOne = function addOne(): SimpleActionType {
    return { type: ActionTypes.ADD_ONE };
};

// creates the Del_note object action to be dispatched
const subOne = function subOne(): SimpleActionType {
    return { type: ActionTypes.SUB_ONE };
};

const addMulti = function addMulti(
    title: string,
    amount: number,
): AddMultiActionType {
    return { type: ActionTypes.ADD_MULTI, title, amount };
};

const doAction = {
    addOne,
    subOne,
    addMulti,
};

export { doAction };
