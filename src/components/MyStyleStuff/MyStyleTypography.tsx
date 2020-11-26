import React from 'react';
import Typography from '@material-ui/core/Typography';
import { WithStyles } from '@material-ui/core/styles';

import { MyStyleForTypographyType } from './MyMaterialUIStyle';

interface Props extends WithStyles<typeof MyStyleForTypographyType> {
    someText: string;
}

export default function MyStyleTypography(props: Props): JSX.Element {
    const { someText } = props;
    const { classes } = props;
    return (
        <div>
            <Typography align="center" className={classes.dull}>
                {`Modified Material UI Style - ${someText} - `}
                {`This is year ${new Date().getFullYear()}`}.
            </Typography>
        </div>
    );
}
