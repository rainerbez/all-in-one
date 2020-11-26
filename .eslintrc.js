module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    env: {
        // enables the addition of global variables
        browser: true, // browser's global vars
        node: true, // Node.js global vars
        jest: true, // supports Jest - testing
        es6: true, // support ES6 globals
    },
    plugins: ['css-modules', 'promise'],
    extends: [
        'airbnb-base',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:css-modules/recommended',
        'plugin:json/recommended',
        'plugin:lodash/recommended',
        'plugin:promise/recommended',
        'prettier',
        'prettier/react',
        // prettier not used, since we are using airbnb for formatting JS
    ],
    rules: {
        'no-use-before-define': 'off', // suppresses the used before defined of 'React'
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/extensions': [
            // used by airbnb - to suppress Missing file extension "tsx" error
            'error',
            'ignorePackages', // suppresses the file extensions errors
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // 'prettier/prettier': ['warn'],
        'css-modules/no-unused-class': ['off', { camelCase: true }], // turn to 'warn' or 'error' to show unused classes
        'css-modules/no-undef-class': ['error', { camelCase: true }],
    },
    globals: {
        // added globals since they are not all added automatically
        // or add in file
        JSX: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'css-modules': {
            basePath: 'src',
        },
    },
    ignorePatterns: ['webpack.config.js'],
};
