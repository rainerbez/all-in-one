import React from 'react';
import Button from '@material-ui/core/Button';
import style from './styles.module.scss';

interface Props {
    buttonText: string;
}

export default function MUIButton(props: Props): JSX.Element {
    const { buttonText } = props;
    return (
        <div className={style.materialButton}>
            <Button variant="contained" color="primary">
                {/** Property sent through the Props */}
                {buttonText}
            </Button>
        </div>
    );
}
