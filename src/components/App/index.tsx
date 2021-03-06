import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import _join from 'lodash/join';

import MaterialButton from '../MaterialButtons';
import MyStyleStuff from '../StyleStuff';

import './App.css';
import style from './app.module.scss';

import logo from './logo.svg';
import Redux from '../Redux';
import ReduxUndo from '../ReduxUndo';
import ReduxUndoSaga from '../ReduxUndoSaga';
import SettingViewer from '../ContextStuff/SettingViewer';
import OneContextProvider from '../ContextStuff';
import SettingChanger from '../ContextStuff/SettingChanger';
import ThemedButtons from '../MaterialButtons/ThemedButtons';
import CustomThemeVariables from '../MaterialButtons/CustomThemeVariables';
import SimpleMaterialButton from '../MaterialButtons/SimpleMaterialButton';
import StyledButton1, {
    StyledButton,
} from '../MaterialButtons/StyledButton1';
import StyledButton2 from '../MaterialButtons/StyledButton2';

// Now imported using lazy loading
// import Footer from '../Footer';
// import Hooks from '../Hooks';

const SimpleTextCompLazy = React.lazy(
    () => import('../SimpleTextComponent'),
);
const HooksLazy = React.lazy(() => import('../Hooks'));

require('./simplescript.js');
require('./simplescript.ts');

// Written as a function expression
const MyHeading: React.FC = () => <h1>Great! It works!</h1>;

function App(): JSX.Element {
    return (
        <div className="App">
            <header className={`App-header ${style.container}`}>
                <img src={logo} className="App-logo" alt="logo" />
                <MyHeading />
                <p className={style.container}>
                    Change the code at{'  '}
                    <code className={`${style.mycode}`}>
                        src/components/App/index.tsx
                    </code>{' '}
                    and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/rainerbez/all-in-one.git"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Beginners All-In-One Example
                </a>
            </header>
            {/* Lazy loads the following two components */}
            <Router>
                <Suspense fallback={<div>Lazy Loading...</div>}>
                    <Switch>
                        {/* Order is important - first match */}
                        <Route path="/hooks" component={HooksLazy} />
                        <Route
                            path="/"
                            component={SimpleTextCompLazy}
                        />
                    </Switch>
                </Suspense>
            </Router>
            <OneContextProvider>
                <SettingChanger />
                <SettingViewer />
            </OneContextProvider>
            <SimpleMaterialButton buttonText="A Simple Material Button" />
            <StyledButton1 someText="Styled Button 1" />
            <StyledButton2 />
            <MaterialButton
                buttonText={_join(
                    ['Material Button', 'Text joined with Lodash'],
                    ' - ',
                )}
            />
            <ThemedButtons />
            <CustomThemeVariables />
            <Redux />
            <ReduxUndo />
            <ReduxUndoSaga />
            <MyStyleStuff />
        </div>
    );
}

export default App;
