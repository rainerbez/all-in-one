import React from 'react';
import { connect } from 'react-redux';
import { doAction } from './reduxActions';
import { StoreType } from './reduxStore';

// eslint-disable-next-line no-shadow
export enum ButtonActions {
    ADDBUTTON = 'ADD BUTTON',
    SUBBUTTON = 'SUBTRACT BUTTON',
}

// properties given by parent component
interface OwnProps {
    buttonText: string;
    action: ButtonActions;
}

// properties to be used by mapSateToProps
//  because they are read/used in this component
interface StateProps {
    counter: number; // not used in button!
}

// functions/actions fired to be used by mapDispatchToProps
//  because they are dispatched in this component
interface DispatchProps {
    // showAll: (showing:boolean) => void
    addOne: () => void;
    subOne: () => void;
}

// type AllProps = StateProps & DispatchProps & OwnProps;
type AllProps = DispatchProps & OwnProps;

export function SimpleButton(props: AllProps): JSX.Element {
    const takeAction = () => {
        if (props.action === ButtonActions.ADDBUTTON) {
            props.addOne();
            // console.log(ButtonActions.ADDBUTTON);
        } else {
            props.subOne();
            // console.log(ButtonActions.SUBBUTTON);
        }
    };

    return (
        <button
            type="button"
            onClick={takeAction}
            style={{
                background: 'SlateBlue',
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

// this subscribes to changes in the state
const mapStateToProps = (currentState: StoreType): StateProps => {
    return {
        counter: currentState.counterInAppState.counter,
    };
};

// this enables the dispatching/firing of actions
const mapDispatchToProps = {
    addOne: doAction.addOne,
    subOne: doAction.subOne,
};

// this connects all together:
// state properties - with properties mapped in mapStateToProps
// AND
// function properties listed in mapDispatchToProps - to be fired in this component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SimpleButton);
