import React from 'react';
import {
    ThemeProvider,
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';

interface MyTheme {
    background: string;
    boxShadow: string;
    variant: string;
}

const useStyles = makeStyles((theme: MyTheme) =>
    createStyles({
        root: {
            background: theme.background,
            boxShadow: theme.boxShadow,
            border: 0,
            fontSize: 16,
            borderRadius: 3,
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin: '10px',
        },
    }),
);

interface ChildButtonPropsType {
    someText: string;
}

function ChildButton(props: ChildButtonPropsType) {
    const { someText } = props;
    const classes = useStyles();
    return (
        <button style={{color:'black',fontWeight:'bold'}} type="button" className={classes.root}>
            {`Child Button - Theme nesting - ${someText}`}
        </button>
    );
}

export default function MyThemeButtons(): JSX.Element {
    return (
        <div>
            <ChildButton someText={'Default Current Theme'} />
            <br />
            <br />
            <ThemeProvider<MyTheme>
                theme={{
                    background:
                        'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    boxShadow:
                        '0 3px 5px 2px rgba(255, 105, 135, .3)',
                }}
            >
                <ChildButton someText={'Replaced Theme'} />
                <br />
                <br />
                <ThemeProvider<MyTheme>
                    theme={(outerTheme) => ({
                        ...outerTheme,
                        background:
                            'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        boxShadow:
                            '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    })}
                >
                    <ChildButton
                        someText={'Replaced Once Again Theme'}
                    />
                </ThemeProvider>
            </ThemeProvider>
        </div>
    );
}
