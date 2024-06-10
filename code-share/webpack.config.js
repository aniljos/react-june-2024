const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 3200,
        open: true, // Add this line to open the browser automatically
        historyApiFallback: { index: "/", disableDotRule: true },
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Add .jsx extension
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.(sass|css|scss)$/,
                use: ['style-loader', 'css-loader',{
                  loader: "postcss-loader",
                }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};