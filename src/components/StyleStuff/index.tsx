import React from 'react';

import MyStyleButtonUsingHookAPI from './HTMLButton';
import StyledButton1, { StyledButton } from '../MaterialButtons/StyledButton1';

import MyStyleTypography, {
    MyStyleForTypography,
} from './Typography';
import StyleWithTheme from './StyleWithTheme';


const divStyle = {
    background: 'CadetBlue',
};

export default function MyStyleStuff(): JSX.Element {
    return (
        <div style={divStyle}>
            <MyStyleTypography
                classes={MyStyleForTypography()}
                someText={'Hello World in MyStyle'}
            />
            <StyleWithTheme />
            <MyStyleButtonUsingHookAPI />
            <StyledButton>A Styled Material-ui Button</StyledButton>
            <StyledButton1 someText="My Styled Styled Material-ui Button" />
        </div>
    );
}
