const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const port = process.env.PORT || 3000;

const browserConfig = {
    mode: "development",
    entry: { app: "./src/App.tsx" },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpe?g|gif|webp|png|mp3|mp4)$/,
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            }
        ]
    },
    resolve: {
        extensions: [ ".js", ".ts", ".tsx" ]
    },
    devServer: {
        static: "./public",
        // hot: true,
        port
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].styles.css"
        }),
    ]
}

const serverConfig = {
    mode: "development",
    entry: { server: "./server/server.ts" },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [ ".js", ".ts", ".tsx" ]
    }
}

module.exports = [browserConfig, serverConfig]
