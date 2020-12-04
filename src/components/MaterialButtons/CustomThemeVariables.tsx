import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
    createMuiTheme,
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import { FormControlLabel } from '@material-ui/core';

// add the variable to the theme
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        appstatus: {
            starting: string;
            running: string;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        appstatus?: {
            starting?: string;
            running?: string;
        };
    }
}

const useStylesWithNewVariableInTheme = makeStyles(
    (theme: AugmentedTheme) =>
        createStyles({
            root: {
                color: theme.appstatus.starting,
                '&$checked': {
                    color: theme.appstatus.running,
                },
            },
            checked: {},
        }),
);

function CustomCheckbox() {
    const classes = useStylesWithNewVariableInTheme();
    return (
        <FormControlLabel
            control={
                <Checkbox
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                    }}
                />
            }
            label="Click Me to change colour!"
        />
    );
}

const theme = createMuiTheme({
    appstatus: {
        starting: orange[500],
        running: blue[500],
    },
});

export default function CustomThemeVariables(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <CustomCheckbox />
        </ThemeProvider>
    );
}
