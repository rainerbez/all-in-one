import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
    buttonText: string;
}

export default function SimpleMaterialButton(
    props: Props,
): JSX.Element {
    const { buttonText } = props;
    return (
        <Button variant="contained" color="primary">
            {/** Property sent through the Props */}
            {buttonText}
        </Button>
    );
}
