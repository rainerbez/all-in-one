import { makeStyles, createStyles, Theme } from '@material-ui/core';

interface ButtonStyleType extends Theme {
    background: string;
    boxShadow: string;
}

const defaultStyle = makeStyles((theme: ButtonStyleType) =>
    createStyles({
        root: {
            background:
                'linear-gradient(45deg, #FE6B8B 30%, #fff020 90%)',
            boxShadow: theme.boxShadow,
            border: 0,
            fontSize: 16,
            borderRadius: 3,
            color: theme.palette.type === 'light' ? 'white' : 'black',
            height: 48,
            padding: '0 30px',
            margin: '20px',
        },
    }),
);

const themeAStyle = makeStyles((theme: ButtonStyleType) =>
    createStyles({
        root: {
            background:
                'linear-gradient(270deg, #FE6B8B 30%, #aaf020 90%)',
            boxShadow: theme.boxShadow,
            border: 0,
            fontSize: 16,
            borderRadius: 3,
            color: theme.palette.type === 'light' ? 'white' : 'black',
            height: 48,
            padding: '0 30px',
            margin: '20px',
        },
    }),
);

export default function withStyle(
    themeName: string,
): Record<'root', string> {
    switch (themeName) {
        case 'themeA':
            return themeAStyle();
        default:
            return defaultStyle();
    }
}
