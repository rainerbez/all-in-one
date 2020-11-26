import {
    put,
    takeEvery,
    spawn,
    all,
    delay,
    take,
    // StrictEffect,call,takeLatest,StrictEffect,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { doAction, ActionTypes } from './reduxActions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* watchFirstThreeDecrements(): Generator<any, any, any> {
    for (let i = 0; i < 3; i += 1) {
        yield take('ADD_ONE');
        // eslint-disable-next-line no-console
        console.log('Taken ', i, '/3');
    }
    // eslint-disable-next-line no-console
    console.log('Taken all 3 ADD_ONE');
}

function* doNotWaitForMe(luckyNum: string): SagaIterator {
    // eslint-disable-next-line no-console
    console.log('Your lucky number in 5sec');

    yield delay(5000);
    // eslint-disable-next-line no-console
    console.log('Your lucky number is: ', luckyNum);
}

function* addWithSaga(): SagaIterator {
    // eslint-disable-next-line no-console
    console.log('Saga working...');

    // sleep(5000); // this hangs the thread in a loop - not good - very bad - DO NOT USE!!

    // eslint-disable-next-line no-console
    console.log('Wait 3sec...then -1');
    yield delay(3000); // executes delay, then yields (sort of returns)
    yield put({ type: ActionTypes.SUB_ONE });
    yield spawn(doNotWaitForMe, '34567'); // executes delay in a completely new thread (sort of) and does not wait for it

    // eslint-disable-next-line no-console
    console.log('Wait 1sec... then +4');
    yield delay(1000);
    yield put(doAction.addMulti('Saga Auto Add 4', 4));
}

// every time user clicks add
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchAddOne(): SagaIterator {
    // yield takeLatest('INCREMENT_ASYNC', incrementAsync) //uses only the lates - cancels all previous
    yield takeEvery(ActionTypes.ADD_ONE, addWithSaga); // spawns a new one every time
}

// single entry point to start all Sagas at once
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): Generator<any, any, any> {
    yield all([watchAddOne(), watchFirstThreeDecrements()]);
}
