import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import SimpleButton, { ButtonActions } from './SimpleButton';
import CustomButton from './CustomButton';
import rootStore from './reduxStore';

const myStyles = {
    padding: '20px',
    background: 'Plum',
};

function Redux(): JSX.Element {
    return (
        <Provider store={rootStore}>
            <div style={myStyles}>
                <div>
                    <h2>React Redux</h2>
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
                <CustomButton amount={-5} title="Subtract five" />
            </div>
        </Provider>
    );
}

export default Redux;
