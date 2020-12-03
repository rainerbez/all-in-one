import React from 'react';
import { OneContextType, OneContext } from '.';

const SettingViewer = (): JSX.Element => {
    const { theme, lucky, authenticated } = React.useContext<
        OneContextType
    >(OneContext);

    return (
        <div style={{ backgroundColor: theme }}>
            <h3>Setting Viewer</h3>
            <p>Your Lucky number is {lucky}.</p>
            <p>
                Authenticated (7 || 17):{' '}
                {authenticated ? 'Yes' : 'No'}
            </p>
        </div>
    );
};

export default SettingViewer;
