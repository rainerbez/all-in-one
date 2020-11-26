import React, { useState } from 'react';

const myStyles = {
    padding: '20px',
    background: 'PaleGoldenRod',
};

interface ButtonProps {
    buttonText: string;
    action(): void;
}

function SimpleButton(props: ButtonProps): JSX.Element {
    return (
        <button
            type="button"
            onClick={props.action} // state lifted upwards
            style={{
                background: 'Sienna',
                padding: '20px',
                margin: '20px',
                color: 'white',
                fontSize: '16px',
            }}
        >
            {props.buttonText}
        </button>
    );
}

function Hooks(): JSX.Element {
    const [count, setNumber] = useState(0);
    const add = () => setNumber(count - 1);
    const sub = () => setNumber(count + 1);

    return (
        <div style={myStyles}>
            <div>
                <h2>React Hooks</h2>
                <SimpleButton buttonText="Minus" action={add} />
                <span
                    style={{
                        padding: '20px',
                        margin: '20px',
                        color: 'black',
                        fontSize: '24px',
                        fontWeight: 'bolder',
                    }}
                >
                    {count}
                </span>
                <SimpleButton buttonText="Plus" action={sub} />
            </div>
            <a href="/">React Router - View SimpleTextComponent</a>
        </div>
    );
}

export default Hooks;
