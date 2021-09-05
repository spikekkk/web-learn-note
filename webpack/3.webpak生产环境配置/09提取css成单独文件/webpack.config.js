const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 创建style标签,将样式放入

                    //"style-loader",
                    // 使用minicssextractplugin取代style-loader
                    // 作用:提取js中的css成为耽误文件
                    MiniCssExtractPlugin.loader,

                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            // 对应输出的css文件进行重命名--新增一个文件夹目录存放
            filename: "css/built.css",
        }),
    ],
    mode: "development",
    devServer: {
        contentBase: "./src/js/index.js",
        port: 3000,
        open: true,
        compress: true,
    },
}
