import React from 'react';
import {
    OneContextType,
    OneContext,
    aLuckyNumber,
    checkIfLuckyToAuthenticate,
} from '.';

const SettingChanger = (): JSX.Element => {
    const {
        theme,
        lucky,
        authenticated,
        setTheme,
        setLucky,
        setAuthenticated,
    } = React.useContext<OneContextType>(OneContext);

    const tryMyLuck = () => {
        const aNum = aLuckyNumber();
        setLucky(aNum);
        setAuthenticated(checkIfLuckyToAuthenticate(aNum));
    };

    return (
        <div style={{ backgroundColor: theme }}>
            <h3>Setting Changer</h3>
            <select
                value={theme}
                onChange={(e) => setTheme(e.currentTarget.value)}
            >
                <option value="orange">Orange</option>
                <option value="lightblue">Blue</option>
                <option value="lightgreen">Green</option>
            </select>
            <button onClick={tryMyLuck}>Get Lucky!</button>
            <p>Your Lucky number is {lucky}.</p>
            <p>Authenticated: {authenticated ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default SettingChanger;
