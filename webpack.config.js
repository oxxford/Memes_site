const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = path.join(__dirname, 'dist');

module.exports = {
    mode: "development",
    entry: {
        app: ["./src/index.jsx"]
    },
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true
                        }
                    }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            title: "My App",
            hash: true,
            template: "stub/index.html"
        })
    ],
    devServer: {
        contentBase: outputDirectory,
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};
