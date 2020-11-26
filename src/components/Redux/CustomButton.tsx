import React from 'react';
import { connect } from 'react-redux';
import { doAction } from './reduxActions';
import { StoreType } from './reduxStore';

// properties given by parent component
interface OwnProps {
    title: string;
    amount: number;
}

// properties to be used by mapSateToProps
//  because they are read/used in this component
interface StateProps {
    counter: number; // not used in button!
}

// functions/actions fired to be used by mapDispatchToProps
//  because they are dispatched in this component
interface DispatchProps {
    addMulti: (title: string, amount: number) => void;
}

// type AllProps = StateProps & DispatchProps & OwnProps;
type AllProps = DispatchProps & StateProps & OwnProps;

export function CustomButton(props: AllProps): JSX.Element {
    const takeAction = () => {
        props.addMulti(props.title, props.amount);
    };

    return (
        <button
            type="button"
            onClick={takeAction}
            style={{
                background: 'CornflowerBlue',
                padding: '20px',
                margin: '20px',
                color: 'white',
                fontSize: '16px',
            }}
        >
            {`${props.title} to ${props.counter}`}
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
    addMulti: doAction.addMulti,
};

// this connects all together:
// state properties - with properties mapped in mapStateToProps
// AND
// function properties listed in mapDispatchToProps - to be fired in this component
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomButton);
