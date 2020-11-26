import React from 'react';

import MyStyleButton from './MyStyleButton';

import MyStyleTypography from './MyStyleTypography';
import MyThemedButtons from './MyThemedButtons';
import { MyStyleForTypography } from './MyMaterialUIStyle';

const divStyle = {
    background: 'CadetBlue',
};

export default function MyStyleStuff(): JSX.Element {
    return (
        <div style={divStyle}>
            <MyStyleTypography
                someText={'Hello World in MyStyle'}
                classes={MyStyleForTypography()}
            />
            <MyThemedButtons />
            <MyStyleButton />
        </div>
    );
}
