import React from 'react';

import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { StoreType } from './reduxStore';

export interface UndoRedoButtonsInterface {
    canUndo: boolean;
    canRedo: boolean;
    onUndo: () => void;
    onRedo: () => void;
}

const StyledButton = styledComponents.button`
    background: CornflowerBlue;
    padding: 10px;
    margin: 20px;
    color: white;
    fontSize: 16px;
    :not([disabled]):hover {
		color: #ed1212;
		cursor: pointer;
    }
    :disabled {
		background: grey;
		cursor: pointer;
	}
`;

const UndoRedoStyledButtons = ({
    canUndo,
    canRedo,
    onUndo,
    onRedo,
}: UndoRedoButtonsInterface) => (
    <p>
        <StyledButton
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
        >
            Undo
        </StyledButton>
        <StyledButton
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
        >
            Redo
        </StyledButton>
    </p>
);

// maps the undo/redo internal vars to our vars in the buttons
const mapStateToProps = (state: StoreType) => {
    return {
        canUndo: state.counterInAppState.past.length > 0,
        canRedo: state.counterInAppState.future.length > 0,
    };
};

// used the type 'any'
// maps the undo/redo internal functions to our functions in the buttons
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UndoRedoStyledButtons);
