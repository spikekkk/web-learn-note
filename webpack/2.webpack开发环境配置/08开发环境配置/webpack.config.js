/*
开发环境配置:能让代码运行
*/

const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            // loader 配置
            {
                // 处理less资源
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                // 处理css资源
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                // 处理图片资源--为css中引入的资源
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10].[ext]",
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: "imgs",
                },
            },
            {
                // 处理html中的img标签图片资源
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: "file-loader",
                options: {
                    name: "[hash:10].[ext]",
                    outputPath: "media",
                },
            },
        ],
    },
    // plugin配置
    plugins: [
        // plugins的配置
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true,
    },
}
