const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // to create the HTML document
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // to clean the ./dist folder

module.exports = {
    // mode: 'development', // or 'development' / "production" - set from package.json
    entry: [path.resolve(__dirname, './src/index.tsx')],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                // use: 'file-loader',   //copies file directly
                use: [
                    {
                        loader: 'url-loader', // puts data in dom if smaller than 8192bytes
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
            '.sass',
            '.scss',
            '.jsx',
            '.css',
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html', // This is a different file from public/index.html
            chunks: ['main'], // to include some scripts
            // excludeChunks: [ 'main' ], //to exclude unwanted scripts
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                },
            ],
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 5000,
    },
    devtool: 'inline-source-map',
};
