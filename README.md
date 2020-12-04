# A beginner's React Redux Saga TypeScript Material-Ui Sass Webpack all-in-one example with Context, ready for VSCode

This project is aimed to help beginners get started with a working example of all these technologies without having to fight all their way to make them work together.

## Package Contents

### Main packages

- [React](https://reactjs.org/) - Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- [React Router](https://reactrouter.com/) - A collection of navigational components that compose declaratively with your application.

- [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) - lets you render a dynamic import as a regular component.

- [React Context](https://reactjs.org/docs/context.html) - to pass data top-down without explicitly passing them as Props.

- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
  
- [TypeScript](https://www.typescriptlang.org/) - Adding static type definitions to JavaScript

- [Redux-Saga](https://redux-saga.js.org/) - to make application side effects easier to manage

- [Redux-Undo](https://www.npmjs.com/package/redux-undo) - enchances existing redux reducer with undo functionality

- [Material-UI](https://material-ui.com/) - React components for faster and easier web development.

- [Sass](https://sass-lang.com/) - CSS with superpowers

- [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras.

- [Webpack](https://webpack.js.org/) - A static module bundler for modern JavaScript applications

### Linting

We basically use [ESLint](https://eslint.org/) which statically analyzes your code to quickly find problems. It also extends the following ESLint plugins, mostly selected from this [Awesome ESLint plugins](https://github.com/dustinspecker/awesome-eslint) list.
  
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base) - To enforce Airbnb's style guide

- [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) - For TypeScript codebases.

- [CSS-modules](https://github.com/atfzl/eslint-plugin-css-modules) - For CSS

- [JSON](https://github.com/azeemba/eslint-plugin-json) - For JSON data.

- [Lodash](https://github.com/wix/eslint-plugin-lodash) - Lodash-specific linting rules for ESLint.

- [Promise](https://github.com/xjamundx/eslint-plugin-promise) - Enforce best practices for JavaScript promises.

- [Stylelint](https://stylelint.io/) - Helps us avoid errors and enforce conventions in your CSS & SASS styles.

### Prettier code

This project uses [Prettier](https://prettier.io/) - opinionated code formatter - to make our code more readable.

### VSCode integration

The project was built using VSCode and the .vscode folder includes the necessary settings files. The following VSCode extensions are suggested.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Note: Using the given configuration files, there should be no conflicts between the different linters and VSCode extensions.

### Other good-to-have extensions

- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

- [Import cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  
## Installation

For the ultimate beginners, you first need to install the following on your computer.

- [npm](https://www.npmjs.com/get-npm)

- [yarn](https://classic.yarnpkg.com)

- [git](https://git-scm.com/)

Then download or clone this repository with

`git clone https://github.com/rainerbez/Beginners-React-Redux-TypeScript-Webpack-MaterialUI-Sass-VSCode-Example.git`

Finally install all the required project packages `node_modules` with

`yarn install`

## Executing / Deploying

In the project directory, you can run:

### `yarn start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. The app is ready to be deployed!

Use `yarn serve -l 3000 -s build` to serve it and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn webpack:start`

Similarly to `yarn start` this will use [Webpack](https://webpack.js.org/) to bundle all the required stuff into one single bundle. Open [http://localhost:5000](http://localhost:5000) to view it in the browser. The page will reload if you make edits.

### `yarn webpack:build`

Similarly to `yarn build` this will use [Webpack](https://webpack.js.org/) to bundle all the required stuff into one single bundle to the `dist` folder, ready for deployment.

### Viewing the production builds

Put the `dist` or `build` files in the root of a server (Apache/XAMPP) and access using something similar to: [http://localhost/](http://localhost/) or else serve it directly using  `yarn serve -s <foldername>` example: `yarn serve -s dist`

## Editing the code

Now that the installation is over and you have successfully compiled the project, you can start experimenting with the code. The following is a short guide of what does what...

### Project Contents - Working Examples available in the starter kit

- `src\index.tsx` - Although everything starts from here, there is nothing special in this file.
  
- `components\App\index.tsx` - The main App.

- `components\App\index.tsx` - Lazy loading of 2 components, Simpletextcomponent and Hooks, with Suspense.

- `components\App\index.tsx` - A React Router switches between the view of 2 lazy loaded 2 components.

- `components\Hooks` - An example of Hooks and how state is lifted upwards, to be saved in parent component.
  
- `components\ContextStuff` - An example of how to pass Context info, use it in Components and modify it when necessary.

- `components\SimpleTextComponent` - An example of a simple React Component. The SASS styles are loaded from the file `styles.module.scss`.

- `components\Redux` - An example of how to use Redux (with Actions, Store and Reducers).

- `components\ReduxUndo` - An example of how to add Redux undo to your Redux application.

- `components\ReduxUndoSaga` - An example of how to add Saga undo to your Redux application.

- `components\MaterialButtons` - An example how to use Material-ui components, together with Theming. Extra SASS styles are loaded from the file `styles.module.scss`.

- `components\StyleStuff` - Some examples how to import and modify Material-UI components and customize styles and Themes.

## Disclaimer & Improvements

As you may have noticed, this project is by itself an experiment. Hence, most probably, there are things which can be done in a much better way. If you would like to improve on this project, please do so :wink:!
