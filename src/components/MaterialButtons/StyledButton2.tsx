import React from 'react';
import Button from '@material-ui/core/Button';

import applyButtonStyle from './styledButton2Style';

export default function StyledButton2(): JSX.Element {
    const themeName = ['default', 'themeA'];

    const classes = applyButtonStyle(themeName[0]); // select 0 or 1

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.root}
        >
            {/** Property sent through the Props */}
            {'Styled Button 2'}
        </Button>
    );
}
