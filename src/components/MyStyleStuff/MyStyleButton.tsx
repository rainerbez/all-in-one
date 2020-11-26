import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface MyStyleForButtonType {
    background: string;
    boxShadow: string;
}

const myStyleForButton = makeStyles((theme: MyStyleForButtonType) =>
    createStyles({
        root: {
            background:
                'linear-gradient(45deg, #FE6B8B 30%, #fff020 90%)',
            boxShadow: theme.boxShadow,
            border: 0,
            fontSize: 16,
            borderRadius: 3,
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin: '20px'
        },
    }),
);

export default function MyStyleButton(): JSX.Element {
    const classes = myStyleForButton();
    return (
        <button type="button" className={classes.root}>
            MyStyle Button
        </button>
    );
}
