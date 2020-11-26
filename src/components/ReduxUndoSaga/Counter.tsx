import React from 'react';
import { connect } from 'react-redux';
// import { doAction } from './reduxActions';
import { StoreType } from './reduxStore';

// // properties given by parent component
// interface OwnProps {
//     // does not receive anythng from parent
// }

// properties to be used by mapSateToProps
//  because they are read/used in this component
interface StateProps {
    counter: number; // not used in button!
}

// // functions/actions fired to be used by mapDispatchToProps
// //  because they are dispatched in this component
// interface DispatchProps {
//     // does not dispatch any actions on store
// }

function Counter(props: StateProps): JSX.Element {
    return (
        <span
            style={{
                padding: '20px',
                margin: '20px',
                color: 'black',
                fontSize: '24px',
                fontWeight: 'bolder',
            }}
        >
            {props.counter}
        </span>
    );
}

// this subscribes to changes in the state
const mapStateToProps = (currentState: StoreType): StateProps => {
    return {
        counter: currentState.counterInAppState.present.counter,
    };
};

// this enables the dispatching/firing of actions
const mapDispatchToProps = {
    // addOne: doAction.addOne,
    // subOne: doAction.subOne,
};

// this connects all together:
// state properties - with properties mapped in mapStateToProps
// AND
// function properties listed in mapDispatchToProps - to be fired in this component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
