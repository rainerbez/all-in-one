import * as React from 'react';
import PropTypes from 'prop-types';

export const aLuckyNumber = (): number =>
    Math.trunc(Math.random() * 20);

const defaultTheme = 'orange';
const defaultLucky = aLuckyNumber();
const defaultAuthenticated = false;

export type OneContextType = {
    theme: string;
    lucky: number;
    authenticated: boolean;
    setTheme: (value: string) => void;
    setLucky: (value: number) => void;
    setAuthenticated: (value: boolean) => void;
};

export const checkIfLuckyToAuthenticate = (
    aLuckyNum: number,
): boolean => aLuckyNum === 7 || aLuckyNum === 17;

export const OneContext = React.createContext<OneContextType>({
    theme: defaultTheme,
    lucky: defaultLucky,
    authenticated: defaultAuthenticated,
    setTheme: (value) => value,
    setLucky: (value) => value,
    setAuthenticated: (value) => value,
});

const OneContextProvider: React.FC<React.ReactNode> = ({
    children,
}) => {
    const [theTheme, setTheme] = React.useState(defaultTheme);
    const [theLucky, setLucky] = React.useState(defaultLucky);
    const [theAuthenticated, setAuthenticated] = React.useState(
        defaultAuthenticated,
    );

    React.useEffect(() => {
        // The initial Context - the init starting values, run only once at start
        setTheme(defaultTheme);
        setLucky(defaultLucky);
        setAuthenticated(checkIfLuckyToAuthenticate(defaultLucky));
    }, []);

    return (
        <OneContext.Provider
            value={{
                theme: theTheme,
                lucky: theLucky,
                authenticated: theAuthenticated,
                setTheme,
                setLucky,
                setAuthenticated,
            }}
        >
            {children}
        </OneContext.Provider>
    );
};

OneContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default OneContextProvider;
