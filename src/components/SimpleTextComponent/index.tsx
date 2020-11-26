import React from 'react';
import style from './styles.module.scss';

function SimpleTextComponent(): JSX.Element {
    return (
        <div className={style.simpleText}>
            {'SimpleTextComponent - Simple React Component - '}
            <a className={style.simpleTextLink} href="/hooks">
                React Router - View React Hooks
            </a>
        </div>
    );
}

export default SimpleTextComponent;
