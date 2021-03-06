import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import SimpleButton, { ButtonActions } from './SimpleButton';
import CustomButton from './CustomButton';
import rootStore from './reduxStore';
import UndoRedoStyledButtons from './UndoRedoStyledButtons';

const myStyles = {
    padding: '20px',
    background: 'AntiqueWhite',
};

function ReduxUndoSaga(): JSX.Element {
    return (
        <Provider store={rootStore}>
            <div style={myStyles}>
                <div>
                    <div>
                        <h2>React Redux with Redux-Undo And Saga</h2>
                        <h3>
                            Open Console F12 to view Saga delayed
                            actions
                        </h3>
                        <SimpleButton
                            buttonText="Minus"
                            action={ButtonActions.SUBBUTTON}
                        />
                        <Counter />
                        <SimpleButton
                            buttonText="Plus"
                            action={ButtonActions.ADDBUTTON}
                        />
                    </div>
                    <CustomButton amount={5} title="Add five" />
                    <CustomButton amount={-5} title="Less five" />
                </div>
                <UndoRedoStyledButtons />
            </div>
        </Provider>
    );
}

export default ReduxUndoSaga;
