import { makeStyles, createStyles } from '@material-ui/core/styles';

// the real style info
export const MyStyleForTypography = makeStyles((theme) => ({
    dull: {
        // marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        background: 'Coral',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 16,
        padding: '30px',
    },

    colorful: {
        background:
            'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '30px',
        margin: 0,
    },
}));

// style type only (for TypeScript)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MyStyleForTypographyType = (): any =>
    createStyles({
        comment: {},
        title: {},
        root: {},
    });
