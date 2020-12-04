import React from 'react';
import Button from '@material-ui/core/Button';
import {
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({});

const globalTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#AAFF00',
            main: '#AAFF00',
            dark: '#AAFF00',
        },
    },
});

const innerTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFAA00',
            main: '#FFAA00',
            dark: '#FFAA00',
        },
    },
});

const ThemedButtons = (): JSX.Element => {
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <br />
                <Button variant="contained" color="primary">
                    Material-ui Default Theme
                </Button>
                <br />
                <br />
                <ThemeProvider theme={globalTheme}>
                    <Button variant="contained" color="primary">
                        Material-ui Global Theme
                    </Button>
                    <br />
                    <br />
                    <ThemeProvider theme={innerTheme}>
                        <Button variant="contained" color="primary">
                            Material-ui Inner Theme
                        </Button>
                    </ThemeProvider>
                </ThemeProvider>
            </ThemeProvider>
            <br />
            <br />
        </div>
    );
};

export default ThemedButtons;
